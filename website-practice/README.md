# website-practice — サイト制作練習まとめ

リポジトリ: `amekw310-debug/my-company-site`  
GitHub Pages: `https://amekw310-debug.github.io/my-company-site/website-practice/`  
作業ブランチ: `claude/naganawa-recruitment-site-7j2i30`（作業後 main にマージ）

---

## フォルダ構成

```
website-practice/
├── freelance-designer/  制作済み・完成扱い
├── it-corporate/        制作済み・完成扱い
└── restaurant/          制作済み・完成扱い
```

> 長縄工務店サイトは独立リポジトリ `amekw310-debug/naganawa-website` に移転しました。  
> 公開URL: https://amekw310-debug.github.io/naganawa-website/

---

## 各サイト概要

### naganawa／長縄工務店（独立リポジトリに移転済み）

| 項目 | 内容 |
|------|------|
| 種別 | コーポレートサイト |
| 会社名 | 株式会社 長縄工務店 |
| 業種 | 舗装工事・土木工事・ICT施工（愛知県春日井市） |
| リポジトリ | amekw310-debug/naganawa-website |
| 公開URL | https://amekw310-debug.github.io/naganawa-website/ |
| ステータス | 移転完了 |

### freelance-designer／Yuki Sato

| 項目 | 内容 |
|------|------|
| 種別 | フリーランスWebデザイナーのポートフォリオ |
| 公開URL | https://amekw310-debug.github.io/my-company-site/website-practice/freelance-designer/ |
| ステータス | 完成 |

### it-corporate／テクノリンク株式会社

| 項目 | 内容 |
|------|------|
| 種別 | IT企業コーポレートサイト（架空） |
| 公開URL | https://amekw310-debug.github.io/my-company-site/website-practice/it-corporate/ |
| ステータス | 完成 |

### restaurant／La Tavola

| 項目 | 内容 |
|------|------|
| 種別 | カジュアルイタリアンレストランサイト（架空・表参道） |
| 公開URL | https://amekw310-debug.github.io/my-company-site/website-practice/restaurant/ |
| ステータス | 完成 |

---

## 長縄工務店サイト 詳細

### ファイル構成

```
naganawa/
├── index.html          トップページ
├── about.html          会社案内
├── business.html       事業内容
├── recruit.html        採用情報
├── contact.html        お問い合わせ
├── style.css           全ページ共通スタイル（1ファイル）
├── images/
│   ├── logo.png        ロゴ（メイン）
│   └── logo.jpg        ロゴ（予備）
├── news/
│   ├── 20250106-new-year.html
│   ├── 20250315-ict-initiative.html
│   ├── 20250410-road-construction.html
│   └── 20250601-recruitment.html
└── README.md           このプロジェクト専用の詳細README
```

### デザインルール

**カラーパレット**

| 変数名 | カラーコード | 用途 |
|--------|------------|------|
| `--navy` | `#1a2f5e` | ベースネイビー |
| `--navy-dark` | `#0f1e3d` | ヘッダー・ダーク背景 |
| `--navy-mid` | `#243f7a` | ボタン・カードアクセント |
| `--navy-light` | `#2d4f8f` | ホバー |
| `--accent` | `#c8d400` | メインアクセント（黄緑） |
| `--accent-dark` | `#a0aa00` | アクセントホバー |
| `--text` | `#1a1a2e` | 本文 |
| `--text-sub` | `#4b5563` | サブテキスト |
| `--gray-light` | `#f3f4f6` | セクション背景 |

**タイポグラフィ**
- フォント: Noto Sans JP（Google Fonts）/ ウェイト 300・400・500・700・900

**レイアウト**
- 最大幅: 1100px（`.inner` クラス）
- 設計方針: モバイルファースト
- メディアクエリ: `min-width: 768px` / `min-width: 1024px` の2段階
- 固定下部バー: モバイル向け「採用情報・お問い合わせ・お電話」3ボタン

**写真素材ルール（重要）**
- GitHub Pages では `images.unsplash.com` が**読み込まれない**（リファラーブロック）
- **必ず Pexels（`images.pexels.com`）を使うこと**
- Pexels URL形式: `https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop`

### 各ページのセクション構成

**index.html（トップ）**
ヒーロースライダー（5枚自動切替）→ 会社紹介 → 事業内容カード → お知らせ → CTA → フッター

ヒーロースライダー写真（Pexels済み）:
- 01 舗装工事: Pexels 56832
- 02 土木工事: Pexels 29274530
- 03 ICT施工: Pexels 1519088
- 04 区画線工事: Pexels 36551115
- 05 完成風景: Pexels 29469917

**about.html（会社案内）**
会社ストーリー → 強み3カード → ビジョン → 会社概要テーブル → CTA

**business.html（事業内容）**
舗装工事業・土木工事業・ICT施工の詳細

**recruit.html（採用情報）**
ヒーロー → 数字アピール → 会社紹介 → 入社理由3選（写真カード） → 一日の流れ → 募集要項 → 応募CTA

**contact.html（お問い合わせ）**
お問い合わせフォーム

### 現在の進捗

**完了済み ✅**
- 全ページHTML・CSS実装
- ニュース記事4件
- モバイル対応（ハンバーガーメニュー・固定下部バー）
- ロゴ画像導入
- SEO対策（meta / OGP / JSON-LD構造化データ）
- ヒーロースライダー写真をPexelsに統一
- スクロール時ヘッダー背景変更

**未完了・ダミーのまま ❌**
- `recruit.html` 入社理由3枚の写真が **Unsplash URLのまま** → GitHub Pagesで非表示
  - 対象: `style.css` の `.reason-photo--1` / `--2` / `--3`（約1165〜1177行）
- 実際の会社情報が未記入（住所・電話番号・設立年が`○○`・ダミー）
- ダミー画像エリアが残存（`dummy-img--construction` クラス）
- ファビコン未設定
- お問い合わせフォームのバックエンド未連携

### 今後の作業予定

**優先度：高**
1. `recruit.html` 入社理由写真3枚をPexelsに差し替え（表示されていないため最優先）
2. 実際の会社情報の記入（住所・電話番号・設立年）
3. ダミー画像を実素材（施工写真）に差し替え

**優先度：中**
4. ファビコン設定
5. お問い合わせフォームのバックエンド連携（Formspreeなど）
6. OGP画像の設定

**優先度：低**
7. 画像のwebp変換・遅延読み込み最適化
8. アクセシビリティ改善

---

## 【次回チャット開始用プロンプト】

> 以下をそのままコピーして新しいチャットの最初に貼り付けてください。

---

```
長縄工務店のウェブサイト制作の続きをお願いします。

【プロジェクト概要】
- 株式会社 長縄工務店（愛知県春日井市・舗装工事/土木工事/ICT施工）のコーポレートサイト
- GitHub Pages で公開中: https://amekw310-debug.github.io/naganawa-website/
- リポジトリ: amekw310-debug/naganawa-website
- 作業ブランチ: claude/naganawa-pexels-photos-dbaldo（このブランチで作業してください）

【技術スタック】
- 純粋なHTML/CSS（フレームワークなし）
- スタイルは style.css 1ファイルに集約（全ページ共通）
- モバイルファースト・レスポンシブ
- フォント: Noto Sans JP（Google Fonts）
- メインカラー: ネイビー(#1a2f5e)、アクセント黄緑(#c8d400)

【重要な注意点】
- 写真素材は必ず Pexels（images.pexels.com）を使うこと
  → GitHub Pages では Unsplash（images.unsplash.com）が読み込まれない
  → Pexels URL形式: https://images.pexels.com/photos/{id}/pexels-photo-{id}.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800&fit=crop

詳細は README.md を読んでください。
今日は何から進めますか？
```
