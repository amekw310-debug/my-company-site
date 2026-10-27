/*
  エムズ Instagram「最新4投稿」フロント表示（B案・自己完結型）
  --------------------------------------------------------------
  data/instagram.json を読み込み、ページ内のすべての [data-ig-gallery]
  （TOP の #ms-instagram-gallery-top と works.html の #ms-instagram-gallery）の
  .ms-gallery__item を「最新4投稿（各1サムネイル・timestamp降順）」で更新する。

  ■ 安全な fallback（最重要）
    - data/instagram.json が無い／取得失敗／空／4件未満／JSON不正／JS無効
      → 何もしない。HTML に書かれた固定4枚（images/ms-01〜04）がそのまま残る。
  ■ 秘密情報は一切持たない
    - 読むのは公開JSONのみ（画像ローカルパス・permalink・種別・日時）。
      アクセストークン等はこのファイルにも公開リポジトリにも存在しない。
  ■ 有効化時に触るのはこのJS・GitHub Action・data/instagram.json のみ（HTML構造は変更不要）。
*/
(function () {
  "use strict";

  var JSON_URL = "data/instagram.json";

  if (typeof window === "undefined" || !window.fetch) return; // 古い環境では固定4枚のまま

  function ready(fn) {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  }

  function each(list, fn) {
    // NodeList / Array を安全に反復
    Array.prototype.forEach.call(list, fn);
  }

  // reel / carousel のときだけ右上に小さな種別アイコンを重ねる
  var ICONS = {
    reel:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="4"/><path d="M3 8h18M8 3l2.4 5M14 3l2.4 5"/><path d="M10 11.3v4l3.6-2z" fill="currentColor" stroke="none"/></svg>',
    carousel:
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="7" y="7" width="13" height="13" rx="2"/><path d="M4 16V5a1 1 0 0 1 1-1h11"/></svg>'
  };

  function injectStyleOnce() {
    if (document.getElementById("ig-feed-style")) return;
    var css =
      ".ms-gallery__item{position:relative}" +
      ".ms-gallery__badge{position:absolute;top:6px;right:6px;width:22px;height:22px;" +
      "display:flex;align-items:center;justify-content:center;border-radius:6px;" +
      "background:rgba(0,0,0,.55);color:#fff;pointer-events:none}" +
      ".ms-gallery__badge svg{width:14px;height:14px;display:block}";
    var s = document.createElement("style");
    s.id = "ig-feed-style";
    s.textContent = css;
    document.head.appendChild(s);
  }

  function valid(posts) {
    return Array.isArray(posts) && posts.length >= 4 &&
      posts.every(function (p) { return p && p.image && p.permalink; });
  }

  function apply(posts) {
    var top4 = posts.slice().sort(function (a, b) {
      return String(b.timestamp || "").localeCompare(String(a.timestamp || ""));
    }).slice(0, 4);

    var galleries = document.querySelectorAll("[data-ig-gallery]");
    if (!galleries.length) return;

    each(galleries, function (gal) {
      var items = gal.querySelectorAll(".ms-gallery__item");
      if (items.length < 4) return; // 構造が想定外なら触らない（固定4枚のまま）

      top4.forEach(function (post, i) {
        var a = items[i];
        if (!a) return;
        a.href = post.permalink;
        a.setAttribute("aria-label", "パソコンショップエムズの最新Instagram投稿を別タブで開く");

        var img = a.querySelector("img");
        if (img) {
          // 動的画像は webp 版が無いため <picture> 内の <source> を外し、jpg のみ使用
          var pic = img.parentNode;
          if (pic && pic.tagName && pic.tagName.toLowerCase() === "picture") {
            each(pic.querySelectorAll("source"), function (s) { s.parentNode.removeChild(s); });
          }
          img.removeAttribute("srcset");
          img.setAttribute("src", post.image);
          img.setAttribute("alt", "パソコンショップエムズの最新Instagram投稿");
        }

        var fig = a.querySelector(".ms-gallery__fig");
        if (fig) {
          var old = fig.querySelector(".ms-gallery__badge");
          if (old) old.parentNode.removeChild(old);
          var icon = ICONS[post.type];
          if (icon) {
            var b = document.createElement("span");
            b.className = "ms-gallery__badge ms-gallery__badge--" + post.type;
            b.innerHTML = icon;
            fig.appendChild(b);
          }
        }
      });

      gal.setAttribute("data-ig-gallery", "live");
    });

    injectStyleOnce();
  }

  ready(function () {
    if (!document.querySelector("[data-ig-gallery]")) return;
    fetch(JSON_URL, { cache: "no-cache" })
      .then(function (r) { return r && r.ok ? r.json() : null; })
      .then(function (data) {
        if (!data || !valid(data.posts)) return; // → 固定4枚のまま
        apply(data.posts);
      })
      .catch(function () { /* 取得失敗 → 固定4枚のまま */ });
  });
})();
