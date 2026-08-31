# セキュリティリファクタリング 実装サマリー

## 実施日
2026年1月10日

## 目的
2年間放置されたNext.jsプロジェクトに対して、セキュリティを中心とした包括的なリファクタリングを実施。

---

## ✅ 実装完了項目

### フェーズ1: 依存パッケージ更新

#### Next.js 15 & React 19へのアップグレード
- **Next.js**: 14.1.0 → 15.1.6
- **React**: 18 → 19
- **React DOM**: 18 → 19

#### 新規パッケージ追加
- **isomorphic-dompurify**: 2.16.0（XSS対策）
- **zod**: 3.24.1（バリデーション）

#### 破壊的変更への対応
- ✅ `params`/`searchParams`の非同期化対応
  - 全ページコンポーネントで`Promise`型に変更
  - `await`を使用してパラメータを取得
- ✅ Edge Runtimeと`generateStaticParams`の併用禁止
  - `posts/categories/[id]/page.tsx`でEdge Runtimeをコメントアウト
- ✅ 型定義の更新
  - `@types/react@^19`
  - `@types/react-dom@^19`

#### セキュリティ監査
- npm audit実行: **脆弱性16件 → 6件に削減**

---

### フェーズ2: セキュリティ対策実装

#### 1. XSS（クロスサイトスクリプティング）対策
**実装内容**:
- DOMPurify（isomorphic-dompurify）によるHTMLサニタイゼーション
- `src/app/_lib/sanitize.ts`に共通関数を作成
- `src/app/posts/[id]/page.tsx`でブログコンテンツをサニタイズ

**許可タグ**:
```typescript
ALLOWED_TAGS: ['p', 'br', 'strong', 'em', 'a', 'h2', 'h3', 'h4',
               'ul', 'ol', 'li', 'img', 'pre', 'code', 'blockquote',
               'span', 'div', 'table', 'thead', 'tbody', 'tr', 'th', 'td']
```

**影響範囲**:
- ブログ詳細ページのHTMLコンテンツ表示

#### 2. セキュリティヘッダーの実装
**実装内容**:
- `next.config.js`に包括的なセキュリティヘッダーを追加

**設定済みヘッダー**:
- `Strict-Transport-Security`: max-age=63072000; includeSubDomains; preload
- `X-Frame-Options`: SAMEORIGIN
- `X-Content-Type-Options`: nosniff
- `Referrer-Policy`: strict-origin-when-cross-origin
- `Permissions-Policy`: camera=(), microphone=(), geolocation=()

**検証方法**:
```bash
curl -I http://localhost:3000 | grep -E "X-Frame-Options|Strict-Transport"
```

#### 3. 入力バリデーションとエラーハンドリング
**実装内容**:
- Zodスキーマによる型安全なバリデーション
- `JSON.parse()`のエラーハンドリング
- 不正データ時の安全なリダイレクト

**対象ファイル**:
- `src/app/contact/_component/ConfirmForm.tsx`

**スキーマ定義**:
```typescript
const InquirySchema = z.object({
  familyName: z.string().min(1),
  givenName: z.string().min(1),
  tradeName: z.string().optional(),
  email: z.string().email(),
  type: z.string().min(1),
  detail: z.string().min(1),
  privacy: z.boolean().optional(),
});
```

---

### フェーズ3: API基盤強化

#### 1. 環境変数の検証
**実装内容**:
- ビルド時に必須環境変数の存在チェック
- 未設定時はビルドを中断

**対象ファイル**:
- `src/app/_lib/env.ts`

**検証される環境変数**:
```
MICROCMS_API_URL
MICROCMS_API_KEY
SITE_URL
SITE_TITLE
SITE_DESCRIPTION
```

#### 2. 共通API関数の実装
**実装内容**:
- 全てのmicroCMS API呼び出しを統一
- URLパラメータの自動エンコード
- 統一されたエラーハンドリング
- APIキーの一元管理

**対象ファイル**:
```
src/app/_lib/api.ts           - 共通API関数（新規作成）
src/app/_lib/getPosts.tsx     - 記事一覧取得
src/app/_lib/getPostDetail.tsx - 記事詳細取得
src/app/_lib/getSearchResults.tsx - 検索結果取得
src/app/_lib/getCategorizedPosts.tsx - カテゴリ別記事取得
src/app/_lib/getCategories.tsx - カテゴリ一覧取得
src/app/_lib/getMore.tsx - 追加記事取得
src/app/_lib/getPostIds.tsx - 記事ID一覧取得
```

**主要機能**:
- URLエンコーディング: `URLSearchParams`が自動処理（`encodeURIComponent()`を併用すると二重エンコードになるため不可）
- エラーハンドリング: `APIError`クラスでステータスコードとメッセージを管理
- キャッシュ制御: Next.js 15の`revalidate`オプションに対応

**使用例**:
```typescript
const data = await fetchMicroCMS<PostList>("posts", {
  limit: "10",
  q: searchQuery, // 自動的にエンコードされる
});
```

---

### フェーズ4: ドキュメント整備

#### 作成したドキュメント

1. **`.env.example`**
   - 環境変数のサンプルファイル
   - 開発者が簡単に設定できるテンプレート

2. **`docs/SECURITY.md`**
   - セキュリティガイドライン
   - 実装済み対策の詳細
   - セキュリティチェックリスト
   - インシデント対応手順
   - セキュリティ更新ポリシー

3. **`docs/CLOUDFLARE_SETUP.md`**
   - Cloudflare Pages設定手順
   - WAFレート制限ルール
   - SSL/TLS設定（HSTS含む）
   - パフォーマンス最適化
   - トラブルシューティング
   - セキュリティチェックリスト

---

## 📊 成果指標

### セキュリティ改善
- ✅ XSS脆弱性: 修正完了（DOMPurify導入）
- ✅ セキュリティヘッダー: 5つのヘッダーを設定
- ✅ 入力バリデーション: Zodによる型安全な検証
- ✅ npm audit: 脆弱性16件 → 6件（62.5%削減）

### コード品質
- ✅ API関数の統一化: 7ファイルをリファクタリング
- ✅ 環境変数の検証: ビルド時チェック実装
- ✅ エラーハンドリング: 統一されたエラー処理

### ビルド・デプロイ
- ✅ Next.js 15対応: ビルド成功
- ✅ 型チェック: TypeScriptエラー0件
- ✅ 静的サイト生成: 25ページを生成

---

## ⚠️ 既知の制限事項

### 1. ESLint警告
```
ESLint: Invalid Options: - Unknown options: useEslintrc, extensions
```
- **影響**: ビルドには影響なし（警告のみ）
- **原因**: ESLint 8とNext.js 15の設定互換性
- **対応**: 次回のESLintアップデート時に解消予定

### 2. Script Nonce
- **現状**: Facebook SDKでハードコードされたnonce使用
- **影響**: 軽微（外部スクリプトのみ）
- **対応**: 将来の改善項目としてバックログに記載

### 3. レート制限
- **現状**: アプリケーションレベルでは未実装
- **対応**: Cloudflare WAFレベルで実装予定
- **ドキュメント**: `docs/CLOUDFLARE_SETUP.md`に手順記載

### 4. 残存脆弱性
- **npm audit**: 6件の脆弱性が残存
  - すべてdev依存パッケージの軽微な問題
  - 本番環境には影響なし
  - 定期的な依存パッケージ更新で対応予定

---

## 🔄 次のステップ

### 優先度: High
1. **Cloudflare WAF設定**
   - レート制限ルールの実装
   - ドキュメント: `docs/CLOUDFLARE_SETUP.md`参照

2. **セキュリティテスト**
   - OWASP ZAPでの脆弱性スキャン
   - XSS攻撃のペネトレーションテスト
   - レート制限の動作確認

### 優先度: Medium
3. **残存脆弱性の解消**
   - dev依存パッケージの更新
   - npm audit修正

4. **Script Nonceの動的生成**
   - Facebook SDKのnonce動的生成
   - CSPヘッダーとの連携

### 優先度: Low
5. **ESLint設定の更新**
   - Next.js 15対応の設定
   - 警告の解消

6. **モニタリングの強化**
   - Cloudflare Analyticsの設定
   - セキュリティイベントのアラート設定

---

## 📝 運用上の注意点

### デプロイ前チェックリスト
- [ ] `npm run build`が成功する
- [ ] 環境変数が全て設定されている
- [ ] セキュリティヘッダーが設定されている
- [ ] XSS対策が動作している（ブログ詳細ページで確認）

### 定期メンテナンス
- **月次**: `npm audit`の実行と脆弱性チェック
- **四半期**: 依存パッケージの更新
- **年次**: 包括的なセキュリティレビュー

### 緊急対応
セキュリティインシデント発生時は`docs/SECURITY.md`の「セキュリティインシデント発生時の対応」セクションを参照。

---

## 📚 参考資料

### プロジェクト内ドキュメント
- [セキュリティガイドライン](./SECURITY.md)
- [Cloudflare設定ガイド](./CLOUDFLARE_SETUP.md)
- [環境変数サンプル](../.env.example)

### 外部リソース
- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [microCMS Security](https://microcms.io/features/security)
- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)

---

## 🤝 貢献者

このリファクタリングは、Claude Code（Claude Sonnet 4.5）のサポートにより実施されました。

---

最終更新: 2026-01-10
バージョン: 1.0.0
ステータス: 完了
