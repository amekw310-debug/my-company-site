# 長縄工務店 ウェブサイト

**公開URL**: https://amekw310-debug.github.io/my-company-site/website-practice/naganawa/

---

## プロジェクト概要

愛知県春日井市を拠点とする建設会社「株式会社 長縄工務店」のコーポレートサイト。  
舗装工事・土木工事・ICT施工（ドローン測量・3D施工）を主力事業とする。

| 項目 | 内容 |
|------|------|
| 会社名 | 株式会社 長縄工務店 |
| 所在地 | 愛知県春日井市（住所・電話は要確認・現在はダミー） |
| 設立 | 1990年代 |
| 資本金 | 2,000万円 |
| 従業員数 | 18名 |
| 事業内容 | 舗装工事業・土木工事業・ICT施工・区画線工事 |
| 主な施工エリア | 春日井市・名古屋市・愛知県内全域 |
| ホスティング | GitHub Pages（静的サイト） |
| リポジトリ | `amekw310-debug/my-company-site` |
| ファイルパス | `website-practice/naganawa/` |

---

## デザインルール

### カラーパレット

| 変数名 | カラーコード | 用途 |
|--------|------------|------|
| `--navy` | `#1a2f5e` | ベースネイビー |
| `--navy-dark` | `#0f1e3d` | ヘッダー・ダーク背景 |
| `--navy-mid` | `#243f7a` | ボタン・カードアクセント |
| `--navy-light` | `#2d4f8f` | ホバー・ライトアクセント |
| `--accent` | `#c8d400` | メインアクセント（黄緑） |
| `--accent-dark` | `#a0aa00` | アクセントホバー |
| `--gray` | `#6b7280` | サブテキスト |
| `--gray-light` | `#f3f4f6` | セクション背景（グレー） |
| `--text` | `#1a1a2e` | 本文テキスト |
| `--text-sub` | `#4b5563` | サブテキスト |

### タイポグラフィ

- **フォント**: Noto Sans JP（Google Fonts）
- **ウェイト**: 300 / 400 / 500 / 700 / 900
- **フォールバック**: `-apple-system, BlinkMacSystemFont, 'Hiragino Kaku Gothic ProN', sans-serif`

### レイアウト

- **最大幅**: 1100px（`.inner` クラスで制御）
- **角丸**: 8px（`--radius`）
- **トランジション**: 0.3s ease（`--transition`）
- **設計方針**: モバイルファースト（スマホ → タブレット → PC の順にメディアクエリ）
- **固定下部バー**: モバイル向けに「採用情報・お問い合わせ・お電話」の3ボタンを常時表示

### 写真素材

- **ヒーロースライダー**: Pexels CDN（`images.pexels.com`）を使用
  - GitHub Pages ではUnsplash（`images.unsplash.com`）が読み込まれないため Pexels に統一
  - Pexels はホットリンクOK
- **その他のダミー画像**: CSS の `background-image` + `background-color` フォールバックで実装
- **ロゴ**: `images/logo.png`（実ロゴ導入済み）

---

## ターゲット

### メインターゲット（会社ページ）

- 愛知県春日井市・名古屋市周辺で道路工事・土木工事の発注を検討している企業・行政担当者
- 地域インフラに関わるプロジェクトを委託したい建設主・デベロッパー

### サブターゲット（採用ページ）

- 建設・土木業界に興味を持つ未経験の若者（20代〜30代前半）
- ICT施工（ドローン・3D測量）など最新技術に興味があるが業界未経験の求職者
- 地元（春日井市周辺）で安定した職に就きたい人

---

## ページ構成

```
website-practice/naganawa/
├── index.html          # トップページ
├── about.html          # 会社案内
├── business.html       # 事業内容
├── recruit.html        # 採用情報
├── contact.html        # お問い合わせ
├── style.css           # 全ページ共通スタイルシート（1ファイル）
├── images/
│   ├── logo.png        # ロゴ（メイン使用）
│   └── logo.jpg        # ロゴ（予備）
└── news/
    ├── 20250106-new-year.html          # お知らせ：年始挨拶
    ├── 20250315-ict-initiative.html    # お知らせ：ICT施工取り組み
    ├── 20250410-road-construction.html # お知らせ：道路工事実績
    └── 20250601-recruitment.html       # お知らせ：採用募集
```

### 各ページの主要セクション

**index.html（トップ）**
- ヘッダー（ロゴ・グローバルナビ・ハンバーガーメニュー）
- ヒーロースライダー（5枚、自動切替）
  - 01: 舗装工事 — 春日井市内 幹線道路アスファルト舗装
  - 02: 土木工事 — 宅地造成・排水設備整備工事
  - 03: ICT施工 — ドローン測量・3Dデータ活用
  - 04: 区画線工事 — 駐車場ライン・交通安全施設
  - 05: 完成風景 — 地域の暮らしを支えるインフラ
- 会社紹介（キャッチコピー＋本文）
- 事業内容カード（3事業）
- お知らせ一覧（最新4件）
- CTAセクション（お問い合わせ・採用）
- フッター

**about.html（会社案内）**
- ヒーロー（ページタイトル）
- 会社ストーリー
- 強み3カード（舗装・土木・ICT）
- ビジョン（ICT推進・人材育成）
- 会社概要テーブル
- CTAセクション

**business.html（事業内容）**
- 舗装工事業・土木工事業・ICT施工の各事業詳細

**recruit.html（採用情報）**
- ヒーロー（「未経験から、未来の建設をつくる。」）
- 数字でアピール（月給32万〜・未経験OK・ICT・春日井発）
- 会社紹介
- 入社理由3選（写真カード）
- 一日の流れ
- 募集要項テーブル
- 応募フォーム（CTA）

**contact.html（お問い合わせ）**
- お問い合わせフォーム

---

## 現在の進捗

### 完了済み

- [x] 全ページのHTML・CSS実装（index / about / business / recruit / contact）
- [x] ニュース記事4件（`news/` ディレクトリ）
- [x] モバイル対応（ハンバーガーメニュー・固定下部バー）
- [x] ロゴ画像の導入（`images/logo.png`）
- [x] SEO対策（meta description / keywords / canonical / OGP / 構造化データ JSON-LD）
- [x] ヒーロースライダー写真をPexels CDNに統一（Unsplashは読み込み不可のため移行済み）
  - スライド01: Pexels 56832（道路アスファルト）
  - スライド02: Pexels 29274530（土木工事・掘削）
  - スライド03: Pexels 1519088（ドローン・航空）
  - スライド04: Pexels 36551115（区画線工事・ラインストライピング）
  - スライド05: Pexels 29469917（道路建設・モーターグレーダー）
- [x] numbers（数字で見る）セクションをindex・aboutから削除
- [x] スクロール時ヘッダー背景変更（navy-dark透過）

### 未着手・ダミーのまま

- [ ] 実際の会社情報の記入（住所・電話番号・設立年の正確な情報）
- [ ] 現場写真の実素材への差し替え（現在ダミー絵文字プレースホルダーを使用）
- [ ] `recruit.html` 入社理由3枚の写真（`style.css` 1165〜1177行）がUnsplash URLのまま → GitHub Pagesで表示されない可能性あり（Pexelsへの差し替えが必要）
- [ ] お問い合わせフォームのバックエンド連携（現在はHTMLフォームのみ）
- [ ] ファビコン未設定

---

## 今後の作業予定

### 優先度：高

1. **recruit.html の入社理由写真をPexelsに差し替え**
   - 対象: `style.css` の `.reason-photo--1` / `.reason-photo--2` / `.reason-photo--3`（1165〜1177行）
   - 現在Unsplash URLのため GitHub Pages で表示されていない可能性あり
   - テーマ: 建設現場・チームワーク・技術作業に合うPexels写真IDを選定する

2. **実際の会社情報の記入**
   - 正式住所・郵便番号（全ページフッター・about.html会社概要テーブルの `○○` 部分）
   - 正式電話番号（全ページ・固定下部バーのtelリンク）
   - 設立年（about.html 会社概要テーブル「1990年代」を正確な年に）

3. **現場写真の実素材への差し替え**
   - index.html / about.html / recruit.html のダミー画像エリア（`dummy-img--construction` クラス）
   - 実際の施工写真（JPG）を `images/` フォルダに配置して差し替え

### 優先度：中

4. **ファビコン設定**
   - `images/logo.png` を元に `favicon.ico` または `favicon.png` を作成
   - 全ページの `<head>` に `<link rel="icon">` を追加

5. **お問い合わせフォーム連携**
   - フォームの送信先設定（Formspree / Netlify Forms など静的サイト向けサービスの利用を検討）

6. **OGP画像の設定**
   - 各ページに `<meta property="og:image">` を追加（SNSシェア時のサムネイル）

### 優先度：低

7. **パフォーマンス最適化**
   - 画像の webp 変換・遅延読み込み（`loading="lazy"`）
   - Google Fonts のサブセット化

8. **アクセシビリティ改善**
   - フォーカスリングの視認性向上
   - ARIAラベルの見直し

---

## 技術メモ

### GitHub Pages での注意点

- `images.unsplash.com` はリファラーブロックにより GitHub Pages から読み込めない → **Pexels（`images.pexels.com`）を使用すること**
- Pexels URL形式: `https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop`

### CSS設計

- スタイルは `style.css` 1ファイルに集約（全ページ共通）
- CSSカスタムプロパティ（変数）を `:root` にまとめて管理
- BEM的な命名（例: `.section-header`, `.hero-title`, `.nav-cta`）
- メディアクエリは `@media (min-width: 768px)` および `@media (min-width: 1024px)` の2段階

### Git ブランチ運用

- メインブランチ: `main`（GitHub Pages の公開ソース）
- 作業ブランチ: `claude/naganawa-recruitment-site-7j2i30`（作業後 main にマージ）
