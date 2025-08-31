# Directory Structure: app-common-model

このプロジェクトでは **app-common-model** 構成を採用しています。

## 基本構造

```
src/
├── app/                 # App Router (Next.js)
│   ├── page.tsx
│   └── example/
│       └── page.tsx
├── common/              # 汎用モジュール（低文脈依存度）
│   ├── components/      # 汎用UIコンポーネント
│   │   ├── spinner/
│   │   ├── button/
│   │   └── ...
│   ├── hooks/           # 汎用カスタムフック
│   ├── lib/             # 汎用ライブラリ関数
│   │   └── date.ts
│   └── types/           # 共通型定義
│       ├── user.ts
│       ├── article.ts
│       └── index.ts
└── model/               # モデル（中文脈依存度）
    ├── user/            # ユーザーモデル
    │   ├── components/  # ユーザー関連コンポーネント
    │   │   ├── avatar/
    │   │   └── list/
    │   ├── hooks/       # ユーザー関連フック
    │   ├── lib/         # ユーザー関連ライブラリ
    │   └── types/       # ユーザー型の再エクスポート
    └── article/         # 記事モデル
        ├── components/  # 記事関連コンポーネント
        │   ├── detail/
        │   └── list/
        ├── hooks/       # 記事関連フック
        ├── lib/         # 記事関連ライブラリ
        └── types/       # 記事型の再エクスポート
```

## 依存関係のルール

文脈依存度の順序: **app** > **model** > **common** > **node_modules**

### インポートの原則

```typescript
// ✅ 良い例：文脈依存度順にインポート
import { FC } from 'react'              // npm packages
import { Spinner } from '@/common/...'  // common (低依存度)
import { UserAvatar } from '@/model/...' // model (中依存度)
import { LocalComponent } from './...'   // app (高依存度)

// ❌ 悪い例：common が model に依存
// common/components/header.tsx
import { UserAvatar } from '@/model/user/...' // 🚫
```

### 依存ルール詳細

- **common**: `common` と `node_modules` のみに依存可能
- **model**: `model`, `common`, `node_modules` に依存可能（相互依存は避ける）
- **app**: すべてに依存可能だが、`app` を他からインポートしてはいけない

## 設計原則

### 1. 関心による凝集

モジュールはユーザーの関心（モデル）ごとにまとめる

```typescript
// Article モデルに関心があるモジュール
function updateArticle(article: Article) { }
function ArticleDetail({ article }: { article: Article }) { }
function useArticle(id: string) { }
```

### 2. Colocation

関係するファイルは近くに配置する

```
model/article/components/detail/
├── index.tsx     # メインコンポーネント
├── loading.tsx   # ローディング状態
├── error.tsx     # エラー状態
└── utils.ts      # このコンポーネント専用のユーティリティ
```

### 3. 文脈依存度を下げる

- 関数を一般化して `common` に移動できないか検討
- インターフェイスを工夫して依存度を下げる

```typescript
// ❌ 高文脈依存
function formatArticleDate(article: Article): string

// ✅ 低文脈依存（common に移動可能）
function formatDate(date: Date): string
```

## 新しいモジュールの配置

1. **このモジュールは何に関心があるか？**を考える
2. **文脈依存度を下げられないか？**を検討
3. **適切な階層**に配置

### 例：日付フォーマット関数

```typescript
// Step 1: 関心を特定
// "記事の日付をフォーマットしたい" → Article モデルに関心

// Step 2: 一般化を検討
// 日付のフォーマット自体は汎用的 → common に移動可能

// Step 3: 配置
// @/common/lib/date.ts に配置
```

## 実装例

`/example` ページで実際の使用例を確認できます。

```bash
npm run dev
# http://localhost:3000/example
```