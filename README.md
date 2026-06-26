# Web制作練習サイト集

架空の企業・店舗を題材にしたコーポレートサイトの制作練習リポジトリです。

公開URL（GitHub Pages）: https://amekw310-debug.github.io/my-company-site/

---

## プロジェクト一覧

### 1. 株式会社 長縄工務店

公開URL: https://amekw310-debug.github.io/my-company-site/website-practice/naganawa/

愛知県春日井市を拠点とする建設会社のコーポレートサイト。
舗装工事・土木工事・ICT施工（ドローン測量・3D施工）を主力事業とする架空の工務店。

| 項目 | 内容 |
|---|---|
| 会社名 | 株式会社 長縄工務店 |
| 所在地 | 愛知県春日井市（住所・電話はダミー） |
| 主な技術 | HTML / CSS |
| フォント | Noto Sans JP（Google Fonts） |
| カラー | グリーン系（#2D6A3F ほか） |
| ページ数 | 5ページ（トップ・事業内容・会社概要・採用情報・お問い合わせ） |
| SEO対策 | meta description・OGP・構造化データ（JSON-LD）・見出し最適化 |

---

### 2. テクノリンク株式会社

公開URL: https://amekw310-debug.github.io/my-company-site/website-practice/it-corporate/

クラウドソリューション・システム開発・DXコンサルティングを提供する架空のIT企業のコーポレートサイト。

| 項目 | 内容 |
|---|---|
| 会社名 | テクノリンク株式会社 / TechnoLink Co., Ltd. |
| 所在地 | 東京都渋谷区（住所・電話はダミー） |
| 主な技術 | HTML / CSS / JavaScript |
| フォント | Noto Sans JP（Google Fonts） |
| カラー | ネイビー（#1E3A5F）・ホワイト基調 |
| ページ数 | 1ページ（スクロール型・全7セクション） |
| SEO対策 | meta description・OGP・Twitter Card・構造化データ（JSON-LD）・見出し最適化 |

**7セクション構成：**
- ヘッダー（ロゴ＋ナビゲーション / ハンバーガーメニュー対応）
- ヒーローセクション（キャッチコピー＋CTAボタン）
- 事業内容（3サービスをカード型で紹介）
- 選ばれる理由（実績数字＋強みの説明）
- お客様の声（テスティモニアル3件）
- 会社概要（テーブルレイアウト）
- お問い合わせフォーム

---

## 共通仕様

- レスポンシブ対応（PC / タブレット / スマートフォン）
- Google Fonts（Noto Sans JP）使用
- GitHub Pages にて公開

## ファイル構成

```
website-practice/
├── naganawa/          # 長縄工務店
│   ├── index.html
│   ├── about.html
│   ├── business.html
│   ├── recruit.html
│   ├── contact.html
│   ├── style.css
│   ├── images/
│   └── news/
└── it-corporate/      # テクノリンク株式会社
    ├── index.html
    └── style.css
```
