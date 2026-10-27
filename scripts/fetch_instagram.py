#!/usr/bin/env python3
"""
エムズ Instagram「最新4投稿」取得スクリプト（B案・自己完結型）

GitHub Actions から呼ばれ、@m.s.gk の最新投稿を Instagram API（Instagram Login 方式）
で取得し、最新4投稿（timestamp降順・各1サムネイル）を:
  - 画像を images/ig/ig-1.jpg 〜 ig-4.jpg としてローカル保存（CDN失効対策）
  - data/instagram.json を生成（{image, permalink, type, timestamp}）
に書き出す。front-end（js/ig-feed.js）がこの JSON を読み、固定4枚を差し替える。

■ 安全第一の設計（ビルドを絶対に失敗させない）
  - IG_ACCESS_TOKEN 未設定        → 何もせず正常終了（サイトは固定4枚のまま）
  - API エラー／空／4件未満／DL失敗 → 書き込まず正常終了（既存JSONor固定4枚のまま）
  いずれも exit 0。部分的な画像だけを書き残さないよう、4枚すべてのDL成功後にまとめて書く。

■ 秘密情報
  - アクセストークンは環境変数 IG_ACCESS_TOKEN からのみ読む（GitHub Secrets 由来）。
    標準出力・JSON・リポジトリには一切出力しない。
"""

import datetime
import json
import os
import pathlib
import sys
import urllib.error
import urllib.parse
import urllib.request

TOKEN = os.environ.get("IG_ACCESS_TOKEN", "").strip()

ROOT = pathlib.Path(__file__).resolve().parent.parent
IMG_DIR = ROOT / "images" / "ig"
DATA_FILE = ROOT / "data" / "instagram.json"

FIELDS = "id,caption,media_type,media_product_type,media_url,thumbnail_url,permalink,timestamp"
API_URL = "https://graph.instagram.com/me/media?" + urllib.parse.urlencode(
    {"fields": FIELDS, "limit": "25", "access_token": TOKEN}
)
UA = "Mozilla/5.0 (compatible; a-webworks-ig-feed/1.0)"


def skip(msg: str) -> None:
    """ビルドを失敗させず安全終了（既存表示を維持）。"""
    print("Instagram feed: skip -> " + msg)
    # Actions のサマリにも残す
    summary = os.environ.get("GITHUB_STEP_SUMMARY")
    if summary:
        try:
            with open(summary, "a", encoding="utf-8") as fh:
                fh.write("Instagram取得をスキップ: " + msg + "（固定4枚のまま）\n")
        except OSError:
            pass
    sys.exit(0)


def main() -> None:
    if not TOKEN:
        skip("IG_ACCESS_TOKEN 未登録")

    # 1) メディア一覧を取得
    try:
        req = urllib.request.Request(API_URL, headers={"User-Agent": UA})
        with urllib.request.urlopen(req, timeout=30) as resp:
            payload = json.load(resp)
    except urllib.error.HTTPError as exc:
        body = exc.read().decode("utf-8", "replace")[:300]
        skip(f"API HTTP {exc.code}: {body}")
    except Exception as exc:  # noqa: BLE001 - 通信系は全て安全終了に倒す
        skip(f"API request error: {exc}")

    if isinstance(payload, dict) and payload.get("error"):
        skip("API error: " + json.dumps(payload["error"], ensure_ascii=False)[:300])

    items = payload.get("data", []) if isinstance(payload, dict) else []
    if not items:
        skip("メディアが0件")

    # 2) 新しい順に並べ、最新4投稿だけ採用
    items.sort(key=lambda m: m.get("timestamp", ""), reverse=True)
    items = items[:4]
    if len(items) < 4:
        skip(f"投稿が{len(items)}件のみ（4件未満）")

    # 3) 4枚すべてをメモリにダウンロード（全成功後にまとめて書き込む）
    blobs = []
    posts = []
    for idx, media in enumerate(items, start=1):
        mtype = (media.get("media_type") or "").upper()
        mproduct = (media.get("media_product_type") or "").upper()

        # 表示する1枚（表紙）の URL
        if mproduct == "REELS" or mtype == "VIDEO":
            cover = media.get("thumbnail_url") or media.get("media_url")
        else:  # IMAGE / CAROUSEL_ALBUM（親の media_url = 1枚目）
            cover = media.get("media_url") or media.get("thumbnail_url")
        if not cover:
            skip(f"投稿{idx}に表示画像URLが無い")

        # 種別
        if mproduct == "REELS":
            kind = "reel"
        elif mtype == "CAROUSEL_ALBUM":
            kind = "carousel"
        else:
            kind = "image"

        try:
            ireq = urllib.request.Request(cover, headers={"User-Agent": UA})
            with urllib.request.urlopen(ireq, timeout=30) as iresp:
                data = iresp.read()
        except Exception as exc:  # noqa: BLE001
            skip(f"投稿{idx}の画像DL失敗: {exc}")

        if len(data) < 512:
            skip(f"投稿{idx}の画像が小さすぎ({len(data)}B)")

        blobs.append(data)
        posts.append(
            {
                "image": f"images/ig/ig-{idx}.jpg",
                "permalink": media.get("permalink", ""),
                "type": kind,
                "timestamp": media.get("timestamp", ""),
            }
        )

    # 4) ここまで来たら全DL成功 → まとめて書き込み
    IMG_DIR.mkdir(parents=True, exist_ok=True)
    for idx, data in enumerate(blobs, start=1):
        (IMG_DIR / f"ig-{idx}.jpg").write_bytes(data)

    out = {
        "generated_at": datetime.datetime.now(datetime.timezone.utc).isoformat(),
        "source": "https://www.instagram.com/m.s.gk/",
        "posts": posts,
    }
    DATA_FILE.parent.mkdir(parents=True, exist_ok=True)
    DATA_FILE.write_text(
        json.dumps(out, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    print(f"Instagram feed: wrote {DATA_FILE.name} and {len(blobs)} images (ig-1..{len(blobs)}).")


if __name__ == "__main__":
    main()
