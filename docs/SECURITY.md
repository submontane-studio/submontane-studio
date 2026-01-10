# セキュリティガイドライン

## 概要

このドキュメントは、Submontane Studioプロジェクトのセキュリティ対策と運用ガイドラインをまとめたものです。

## 実装済みのセキュリティ対策

### 1. XSS（クロスサイトスクリプティング）対策

**実装内容**:
- DOMPurify（isomorphic-dompurify）によるHTMLサニタイゼーション
- microCMSから取得したHTMLコンテンツを`sanitizeHTML()`関数で処理

**対象ファイル**:
- `src/app/_lib/sanitize.ts` - サニタイズ関数
- `src/app/posts/[id]/page.tsx` - ブログ詳細ページ

**使用方法**:
```typescript
import { sanitizeHTML } from "@/app/_lib/sanitize";

const safeHTML = sanitizeHTML(unsafeHTML);
```

### 2. JSON.parse() エラーハンドリング

**実装内容**:
- Zodによるスキーマバリデーション
- try-catchでのエラー捕捉
- 不正なデータの場合は入力画面へリダイレクト

**対象ファイル**:
- `src/app/contact/_component/ConfirmForm.tsx`

### 3. セキュリティヘッダー

**実装内容**:
- Strict-Transport-Security (HSTS)
- X-Frame-Options
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy

**対象ファイル**:
- `next.config.js`

### 4. 環境変数の検証

**実装内容**:
- ビルド時に必須環境変数の存在チェック
- 未設定時はエラーを発生させてビルドを中断

**対象ファイル**:
- `src/app/_lib/env.ts`

### 5. API呼び出しのセキュリティ強化

**実装内容**:
- 共通API関数による一元管理
- URLパラメータの自動エンコード
- エラーハンドリングの統一
- APIキーの安全な管理

**対象ファイル**:
- `src/app/_lib/api.ts`
- `src/app/_lib/getPosts.tsx`
- `src/app/_lib/getPostDetail.tsx`
- `src/app/_lib/getSearchResults.tsx`

## 環境変数の設定

### 必須環境変数

`.env.local`ファイルに以下の環境変数を設定してください:

\`\`\`
MICROCMS_API_URL=https://your-service.microcms.io/api/v1/
MICROCMS_API_KEY=your-api-key-here
SITE_URL=https://submontane.jp
SITE_TITLE=SUBMONTANE
SITE_DESCRIPTION=Web制作・開発を行うSubmontaneのポートフォリオサイトです
\`\`\`

### 環境変数の管理

- **本番環境**: Cloudflare Pagesの環境変数設定で管理
- **開発環境**: `.env.local`ファイル（Gitにコミットしない）
- **サンプル**: `.env.example`を参照

## セキュリティチェックリスト

### デプロイ前

- [ ] `npm audit`でセキュリティ脆弱性をチェック
- [ ] 環境変数が正しく設定されているか確認
- [ ] ビルドが成功するか確認（`npm run build`）
- [ ] セキュリティヘッダーが設定されているか確認

### コードレビュー時

- [ ] ユーザー入力のバリデーションが実装されているか
- [ ] `dangerouslySetInnerHTML`を使用する場合、サニタイズされているか
- [ ] APIキーやシークレットがハードコードされていないか
- [ ] エラーハンドリングが適切に実装されているか

## セキュリティインシデント発生時の対応

### 1. 即座に対応

- 該当機能を一時停止
- ログを確認して影響範囲を特定

### 2. 修正

- セキュリティパッチを適用
- 修正内容をテスト

### 3. デプロイ

- 緊急デプロイを実施
- 動作確認

### 4. 報告

- インシデントレポートを作成
- 再発防止策を検討

## セキュリティ更新ポリシー

### 依存パッケージの更新

- **Critical脆弱性**: 即座に対応
- **High脆弱性**: 1週間以内に対応
- **Medium脆弱性**: 2週間以内に対応
- **Low脆弱性**: 次回の定期更新で対応

### 定期的なセキュリティ監査

- 月次: `npm audit`の実行
- 四半期: 依存パッケージの更新
- 年次: 包括的なセキュリティレビュー

## 参考資料

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Next.js Security Best Practices](https://nextjs.org/docs/app/building-your-application/configuring/security)
- [microCMS Security](https://microcms.io/features/security)

## 連絡先

セキュリティに関する問題を発見した場合は、以下の方法でご連絡ください:

- プロジェクトリポジトリのIssue
- メール: （適宜追加してください）
