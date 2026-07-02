# ドメイン取得〜ネット公開 手順書

A@Web Works サイト（a-webworks.jp）を立ち上げた際の手順と、  
詰まりやすいポイントをまとめた次回のための備忘録。

---

## 全体の流れ

```
ドメイン取得
  ↓
GitHubリポジトリ作成・ファイル配置
  ↓
GitHub Pages 有効化（GitHub Actions でデプロイ）
  ↓
DNS設定（レジストラ管理画面）
  ↓
カスタムドメイン設定（GitHub）
  ↓
HTTPS 有効化
  ↓
動作確認
```

---

## 1. ドメイン取得

**使用サービス例**: お名前.com / Xserver Domain / ムームードメイン

### 注意点
- 取得直後はメール認証が必要な場合がある（放置すると停止される）
- `.jp` ドメインは審査があり取得まで数時間〜1営業日かかることがある
- 取得後すぐ DNS 設定画面に進んでよい（後の手順と並行して進める）

---

## 2. GitHubリポジトリの準備

### 必須ファイル
| ファイル | 役割 |
|---|---|
| `index.html` | トップページ |
| `CNAME` | カスタムドメインを1行だけ記載（例: `a-webworks.jp`） |
| `.github/workflows/deploy.yml` | 自動デプロイ設定 |

### CNAME ファイル
```
a-webworks.jp
```
> ※ www なし・https なし・改行のみ。これがないとドメインが毎回リセットされる。

### deploy.yml（最小構成）
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: false

jobs:
  deploy:
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v5
      - uses: actions/upload-pages-artifact@v3
        with:
          path: '.'          # ← リポジトリルート全体を公開
      - id: deployment
        uses: actions/deploy-pages@v4
```

---

## 3. GitHub Pages の有効化

1. リポジトリ → **Settings** → **Pages**
2. **Source** を `GitHub Actions` に変更（Deploy from branch ではない）
3. **Custom domain** 欄に `a-webworks.jp` と入力 → Save
4. この時点では DNS が繋がっていなくてもOK（エラーが出ても次に進む）

> **順番の罠**: GitHub 側でドメインを先に入力しておき、DNS 設定は後から合わせる  
> 逆（DNS先）だと GitHub が「ドメイン検証中」で止まりやすい

---

## 4. DNS 設定（レジストラ管理画面）

### 設定するレコード

| タイプ | ホスト名 | 値 | 用途 |
|---|---|---|---|
| A | `@`（または空欄） | `185.199.108.153` | GitHub Pages IP |
| A | `@` | `185.199.109.153` | GitHub Pages IP |
| A | `@` | `185.199.110.153` | GitHub Pages IP |
| A | `@` | `185.199.111.153` | GitHub Pages IP |
| CNAME | `www` | `amekw310-debug.github.io` | www アクセス対応 |

> **GitHub Pages の IP アドレスは変更されることがある**  
> 公式ドキュメントで最新値を確認: https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

### DNS 反映待ち
- 早ければ **30分〜1時間**、最大 **48〜72時間** かかる
- 反映確認コマンド（ターミナル）:
  ```
  nslookup a-webworks.jp
  ```
  または
  ```
  dig a-webworks.jp
  ```
  → `185.199.xxx.xxx` が返ってきたら成功

---

## 5. HTTPS（SSL証明書）の有効化

1. DNS が反映されたことを確認してから GitHub Pages 設定に戻る
2. Settings → Pages → **Enforce HTTPS** にチェックを入れる
3. 証明書の発行まで **30分〜数時間** かかる（その間は「Certificate not yet created」と出る）
4. 証明書が発行されると `https://a-webworks.jp` でアクセスできる

> **チェックが押せない場合** → DNS 反映が完了していない。時間をおいて再試行。

---

## 6. よくあるトラブルと解決策

### ❌ サイトが 404 になる
- `CNAME` ファイルが存在するか確認
- GitHub Actions のデプロイが成功しているか確認（Actions タブ → 緑のチェック）
- `deploy.yml` の `path: '.'` が正しいか確認
- リポジトリが **Public** になっているか確認（Private は有料プランが必要）

### ❌ ドメインを設定すると毎回リセットされる
- `CNAME` ファイルをリポジトリのルートに配置していないのが原因
- GitHub 側で Custom domain を入力しても、`CNAME` ファイルがないと push のたびに消える

### ❌ www.a-webworks.jp が繋がらない
- DNS に CNAME レコード（`www` → `amekw310-debug.github.io`）が設定されていない
- お名前.com など一部サービスは CNAME と A レコードが同一ホスト名に共存できない場合がある

### ❌ HTTPS の鍵マークが出ない（Mixed Content）
- HTML や CSS 内で `http://` の URL を参照している箇所がある
- 外部フォント・画像のリンクをすべて `https://` に統一する

### ❌ 更新してもブラウザに反映されない（キャッシュ）
- CSS / JS のリンクにバージョン番号を付ける:
  ```html
  <link rel="stylesheet" href="main.css?v=32">
  ```
- 数字を上げるたびにブラウザが新しいファイルを取得する

### ❌ 画像が表示されない
- ファイル名の **大文字・小文字** が一致しているか確認（GitHub はケースセンシティブ）
  - NG: `images/Hero.png` → HTML に `images/hero.png` と書く
  - OK: 両方を小文字に統一する
- パスは相対パスで指定（`./images/xxx.png` または `images/xxx.png`）

### ❌ Google 検索に表示されない
- 公開直後は数日〜数週間かかる（正常）
- `sitemap.xml` を作成して Google Search Console に登録する
- `robots.txt` に `Allow: /` が設定されているか確認

---

## 7. 公開後のデプロイ手順（通常時）

```bash
# 変更を main ブランチにプッシュするだけで自動デプロイされる
git add .
git commit -m "変更内容"
git push origin main
```

デプロイ完了まで **1〜2分** で GitHub Actions が動く。  
Actions タブで進捗を確認できる。

---

## 8. チェックリスト（次回の確認用）

- [ ] ドメイン取得（メール認証済み）
- [ ] `CNAME` ファイルをリポジトリルートに配置
- [ ] `deploy.yml` を `.github/workflows/` に配置
- [ ] リポジトリが Public になっている
- [ ] GitHub Pages → Source: GitHub Actions に設定
- [ ] GitHub Pages → Custom domain に入力
- [ ] DNS に A レコード 4件 + CNAME(www) を設定
- [ ] DNS 反映確認（nslookup / dig）
- [ ] Enforce HTTPS にチェック
- [ ] `https://a-webworks.jp` で表示確認
- [ ] `https://www.a-webworks.jp` で表示確認
- [ ] Google Search Console にサイトマップ送信

---

## 参考リンク

- GitHub Pages 公式ドキュメント: https://docs.github.com/ja/pages
- GitHub Pages カスタムドメイン: https://docs.github.com/ja/pages/configuring-a-custom-domain-for-your-github-pages-site
- DNS 伝播確認ツール: https://www.whatsmydns.net/

---

*最終更新: 2026-07-02*
