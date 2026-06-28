# my-company-site

A@Web Works のポートフォリオ・制作実績をまとめたリポジトリです。  
GitHub Pages にてすべてのページを公開しています。

**公開URL**: https://amekw310-debug.github.io/my-company-site/

---

## ディレクトリ構成

```
my-company-site/
├── freelance-portfolio/   # フリーランスポートフォリオサイト（メイン）
└── website-practice/      # 制作実績・練習サイト集
    ├── korea-cafe/            韓国スタイルカフェ「카페 봄」
    ├── freelance-designer/    フリーランスデザイナー向けLP
    ├── homepage-lp/           ホームページ制作LP
    ├── it-corporate/          ITコーポレートサイト（テクノリンク株式会社）
    └── restaurant/            レストラン
```

> 株式会社 長縄工務店サイトは独立リポジトリ `amekw310-debug/naganawa-website` に移転しました。

---

## freelance-portfolio

A@Web Works のメインポートフォリオサイトです。

- **URL**: https://amekw310-debug.github.io/my-company-site/freelance-portfolio/
- **技術**: HTML / CSS（Vanilla）
- **フォント**: Shippori Mincho, Cormorant Garamond, Noto Sans JP（Google Fonts）

### セクション構成

| セクション | 内容 |
|---|---|
| Hero | キャッチコピー・CTAボタン・デバイスモックアップ |
| About | 自己紹介・スキルタグ |
| Why Choose Me | 選ばれる理由（6項目） |
| Services | サービス内容（4種） |
| Works | 制作実績（4件） |
| Contact | お問い合わせフォーム・LINE誘導 |

---

## website-practice

制作実績として公開しているサンプルサイト集です。

| サイト | URL |
|---|---|
| 韓国カフェ「카페 봄」 | https://amekw310-debug.github.io/my-company-site/website-practice/korea-cafe/ |
| テクノリンク株式会社 | https://amekw310-debug.github.io/my-company-site/website-practice/it-corporate/ |
| 株式会社 長縄工務店 | https://amekw310-debug.github.io/naganawa-website/ （独立リポジトリに移転）|

### テクノリンク株式会社（ITコーポレートサイト）

架空のIT企業のコーポレートサイト。クラウド・システム開発・DXコンサルティングを主力事業とする。

| 項目 | 内容 |
|---|---|
| カラー | ネイビー（#1E3A5F）・ホワイト基調 |
| フォント | Noto Sans JP（Google Fonts） |
| 構成 | 1ページ完結型（全7セクション） |
| 対応 | レスポンシブ・ハンバーガーメニュー・スクロールアニメーション |
| SEO | meta description・OGP・Twitter Card・JSON-LD構造化データ |

### 株式会社 長縄工務店（建設業コーポレートサイト）

愛知県春日井市を拠点とする建設会社のコーポレートサイト。舗装工事・土木工事・ICT施工を主力事業とする。

> **移転済み** — リポジトリ `amekw310-debug/naganawa-website`、公開URL: https://amekw310-debug.github.io/naganawa-website/

| 項目 | 内容 |
|---|---|
| カラー | ネイビー（#1a2f5e）・アクセント黄緑（#c8d400） |
| フォント | Noto Sans JP（Google Fonts） |
| 構成 | 5ページ（トップ・事業内容・ICT施工・採用情報・会社情報・お問い合わせ）＋ニュース記事 |
| 対応 | レスポンシブ・フォトスライダー・固定ボトムバー |
| SEO | meta description・OGP・JSON-LD構造化データ・見出し最適化 |

---

## デプロイ

`main` ブランチへのプッシュで GitHub Actions が自動デプロイします。

```yaml
# .github/workflows/deploy.yml
path: '.'  # リポジトリルート全体を GitHub Pages へ公開
```

---

© 2026 A@Web Works
