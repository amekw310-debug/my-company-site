# my-company-site

A@Web Works のポートフォリオ・制作実績をまとめたリポジトリです。  
GitHub Pages + 独自ドメインにて公開しています。

**公開URL**: https://a-webworks.jp/

---

## ディレクトリ構成

```
my-company-site/
├── index.html             # ポートフォリオ本体（メインページ）
├── main.css               # スタイルシート
├── profile.jpg            # プロフィール写真
├── images/                # OGP・実績サムネイル画像
├── sitemap.xml            # サイトマップ
├── robots.txt             # クローラー設定
├── 404.html               # カスタム404ページ
├── CNAME                  # 独自ドメイン設定（a-webworks.jp）
├── freelance-portfolio/   # 旧URLからのリダイレクト用
└── website-practice/      # 制作実績サンプルサイト
    ├── korea-cafe/            韓国スタイルカフェ「카페 봄」
    └── it-corporate/          ITコーポレートサイト（テクノリンク株式会社）
```

> 株式会社 長縄工務店サイトは独立リポジトリ `amekw310-debug/naganawa-website` に移転済みです。

---

## ポートフォリオ（メイン）

A@Web Works のメインポートフォリオサイトです。

- **URL**: https://a-webworks.jp/
- **技術**: HTML / CSS（Vanilla）
- **フォント**: Shippori Mincho, Cormorant Garamond, Noto Sans JP（Google Fonts）

### セクション構成

| セクション | 内容 |
|---|---|
| Hero | キャッチコピー・CTAボタン・デバイスモックアップ |
| Works | 制作実績サンプルサイト |
| About | 自己紹介・スキルタグ |
| My Commitment | こだわり（6項目） |
| Services | サービス内容（4種） |
| Pricing | 料金プラン（3プラン） |
| Contact | お問い合わせフォーム・相談の流れ・FAQ |

---

## website-practice（制作実績サンプル）

| サイト | URL |
|---|---|
| 韓国カフェ「카페 봄」 | https://a-webworks.jp/website-practice/korea-cafe/ |
| テクノリンク株式会社 | https://a-webworks.jp/website-practice/it-corporate/ |
| 株式会社 長縄工務店 | https://amekw310-debug.github.io/naganawa-website/（独立リポジトリ）|

---

## デプロイ

`main` ブランチへのプッシュで GitHub Actions が自動デプロイします。

```yaml
# .github/workflows/deploy.yml
path: '.'  # リポジトリルート全体を GitHub Pages へ公開
```

---

© 2026 A@Web Works
