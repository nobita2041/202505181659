# Todo アプリ

シンプルなReact+TypeScriptで作成されたTodoアプリです。MVPレベルの必要最低限の機能を実装しています。

## 機能

- Todoの追加
- Todoの完了/未完了の切り替え
- Todoの削除
- ローカルストレージを使用したTodoの保存

## セットアップと実行方法

### 必要な環境

- Node.js (14.x以上推奨)
- npm または yarn

### インストール

```bash
# 依存パッケージのインストール
npm install
# または
yarn install
```

### 開発モードでの実行

```bash
npm start
# または
yarn start
```

ブラウザで http://localhost:3000 を開くとアプリが表示されます。

## 構成

- `src/App.tsx`: メインのアプリケーションコンポーネント
- `src/components/TodoForm.tsx`: 新しいTodoを追加するフォーム
- `src/components/TodoList.tsx`: Todoのリスト表示
- `src/components/TodoItem.tsx`: 個別のTodoアイテム

## 今後の拡張可能性

- フィルタリング機能（すべて/完了済み/未完了）
- カテゴリ分け
- 期限の設定
- ユーザー認証と複数デバイス間での同期 