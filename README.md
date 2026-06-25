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
    ├── it-corporate/          ITコーポレートサイト
    ├── naganawa/              長縄
    └── restaurant/            レストラン
```

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

---

## デプロイ

`main` ブランチへのプッシュで GitHub Actions が自動デプロイします。

```yaml
# .github/workflows/deploy.yml
path: '.'  # リポジトリルート全体を GitHub Pages へ公開
```

---

© 2026 A@Web Works
