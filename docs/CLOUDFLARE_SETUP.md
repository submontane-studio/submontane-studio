# Cloudflare設定ガイド

## 概要

このドキュメントは、Submontane StudioプロジェクトをCloudflare Pagesにデプロイする際のセキュリティ設定手順を説明します。

## 前提条件

- Cloudflareアカウント
- GitHubリポジトリへのアクセス権
- Cloudflare Pagesプロジェクトが作成済み

---

## 1. Cloudflare Pages基本設定

### 1.1 プロジェクト作成

1. Cloudflareダッシュボードにログイン
2. **Pages** → **Create a project**
3. GitHubリポジトリを接続
4. ビルド設定:
   - **Framework preset**: Next.js
   - **Build command**: `npm run build`
   - **Build output directory**: `.next`
   - **Root directory**: `/`

### 1.2 環境変数の設定

**Settings** → **Environment variables** で以下を設定:

```
MICROCMS_API_URL=https://your-service.microcms.io/api/v1/
MICROCMS_API_KEY=your-api-key-here
SITE_URL=https://submontane.jp
SITE_TITLE=SUBMONTANE
SITE_DESCRIPTION=Web制作・開発を行うSubmontaneのポートフォリオサイトです
```

**重要**: Production環境とPreview環境で別々の値を設定できます。

---

## 2. セキュリティ設定

### 2.1 WAF（Web Application Firewall）

#### 基本設定

1. Cloudflareダッシュボード → **Security** → **WAF**
2. **Create rule** をクリック

#### レート制限ルールの作成

**目的**: DoS攻撃やブルートフォース攻撃を防ぐ

**ルール1: お問い合わせフォーム保護**

```
Rule name: Contact Form Rate Limit
Field: URI Path
Operator: equals
Value: /contact

Then:
- Rate: 5 requests
- Period: 60 seconds
- Action: Block
- Duration: 600 seconds (10分間)
```

**ルール2: 検索機能の保護**

```
Rule name: Search Rate Limit
Field: URI Path
Operator: equals
Value: /posts/search

Then:
- Rate: 10 requests
- Period: 60 seconds
- Action: Challenge (CAPTCHA)
```

**ルール3: APIエンドポイント保護**

```
Rule name: API Rate Limit
Field: URI Path
Operator: contains
Value: /api/

Then:
- Rate: 30 requests
- Period: 60 seconds
- Action: Block
- Duration: 300 seconds (5分間)
```

#### カスタムルール（オプション）

**悪意のあるボット対策**:

```
Rule name: Block Bad Bots
Field: User Agent
Operator: contains
Value: (curl|wget|python|scrapy)

Then: Block
```

**注意**: 正当なクローラー（Googlebot等）はブロックしないよう注意してください。

### 2.2 ページルール

#### キャッシュ設定

1. **Caching** → **Configuration**
2. **Cache Rules** → **Create rule**

**静的アセット用**:

```
Rule name: Cache Static Assets
If: File extension matches
  - jpg, jpeg, png, gif, webp, svg
  - css, js
  - woff, woff2, ttf

Then:
- Cache level: Standard
- Browser Cache TTL: 1 year
- Edge Cache TTL: 1 month
```

**動的コンテンツ用**:

```
Rule name: Cache HTML Pages
If: URI Path contains
  - /posts/
  - /marketing/
  - /information

Then:
- Cache level: Standard
- Browser Cache TTL: 4 hours
- Edge Cache TTL: 1 hour
```

### 2.3 SSL/TLS設定

1. **SSL/TLS** → **Overview**
2. **暗号化モード**: Full (strict) を選択
3. **Always Use HTTPS**: ON
4. **Automatic HTTPS Rewrites**: ON
5. **Minimum TLS Version**: TLS 1.2

#### HSTS設定

1. **SSL/TLS** → **Edge Certificates**
2. **HTTP Strict Transport Security (HSTS)**: 有効化
3. 設定値:
   - **Max Age Header**: 12 months (31536000)
   - **Include subdomains**: ON
   - **Preload**: ON (オプション)

**注意**: HSTSを有効にする前に、全てのサブドメインがHTTPS対応していることを確認してください。

### 2.4 セキュリティヘッダー

Next.jsの`next.config.js`で設定済みですが、Cloudflare側でも追加可能:

1. **Rules** → **Transform Rules** → **Modify Response Header**
2. **Create rule**

```
Rule name: Security Headers
If: All incoming requests

Then add:
- X-Frame-Options: SAMEORIGIN
- X-Content-Type-Options: nosniff
- Referrer-Policy: strict-origin-when-cross-origin
- Permissions-Policy: camera=(), microphone=(), geolocation=()
```

**注意**: Next.js側と重複設定になるため、どちらか一方で設定すれば十分です。

---

## 3. パフォーマンス最適化

### 3.1 Auto Minify

1. **Speed** → **Optimization**
2. **Auto Minify**: 有効化
   - JavaScript: ON
   - CSS: ON
   - HTML: ON

### 3.2 Brotli圧縮

1. **Speed** → **Optimization**
2. **Brotli**: ON

### 3.3 Rocket Loader

**注意**: Next.jsとの互換性問題があるため、**OFF推奨**

### 3.4 Early Hints

1. **Speed** → **Optimization**
2. **Early Hints**: ON

---

## 4. モニタリングとアラート

### 4.1 Analyticsの有効化

1. **Analytics & Logs** → **Web Analytics**
2. JavaScriptビーコンを有効化（プライバシーを尊重する方式）

### 4.2 セキュリティイベントの監視

1. **Security** → **Events**
2. 定期的に以下を確認:
   - ブロックされたリクエスト数
   - チャレンジ発生数
   - 地理的な攻撃パターン

### 4.3 アラート設定（プランによる）

**Security Center**でアラートを設定:

- DDoS攻撃検知
- WAFルール発動
- SSL証明書期限切れ警告

---

## 5. デプロイ手順

### 5.1 初回デプロイ

1. GitHubにプッシュ
2. Cloudflare Pagesが自動的にビルド開始
3. ビルドログを確認
4. デプロイ完了後、カスタムドメインを設定

### 5.2 カスタムドメイン設定

1. **Custom domains** → **Set up a custom domain**
2. `submontane.jp` を追加
3. DNS設定を確認（通常は自動設定）
4. SSL証明書が自動発行されるまで待機（数分）

### 5.3 プレビューデプロイ

- プルリクエストごとに自動的にプレビュー環境が作成されます
- URLパターン: `https://[branch].[project].pages.dev`

---

## 6. トラブルシューティング

### 6.1 ビルドエラー

**環境変数が設定されていない**:

```
Error: 環境変数 MICROCMS_API_URL が設定されていません
```

**対処**: Settings → Environment variables で必須環境変数を設定

**Next.js 15の互換性問題**:

```
Error: Module not found
```

**対処**: `package.json`と`package-lock.json`が最新であることを確認

### 6.2 レート制限が厳しすぎる

**症状**: 正当なユーザーがブロックされる

**対処**:
1. WAFルールの閾値を調整（5 → 10リクエスト等）
2. 期間を短く（600秒 → 300秒）
3. ActionをBlockからChallengeに変更

### 6.3 キャッシュの問題

**症状**: 最新のコンテンツが表示されない

**対処**:
1. **Caching** → **Configuration** → **Purge Cache**
2. "Purge Everything"を実行
3. または特定のURLのみパージ

---

## 7. セキュリティチェックリスト

### デプロイ前

- [ ] 環境変数が全て設定されている
- [ ] SSL/TLSが"Full (strict)"モードになっている
- [ ] Always Use HTTPSが有効になっている
- [ ] HSTSが有効になっている

### デプロイ後

- [ ] カスタムドメインが正しく動作している
- [ ] SSL証明書が有効（ブラウザで確認）
- [ ] WAFルールが動作している（テスト攻撃で確認）
- [ ] レート制限が適切に動作している
- [ ] セキュリティヘッダーが設定されている（開発者ツールで確認）

### 定期メンテナンス

- [ ] 月次: Analyticsでトラフィックパターンを確認
- [ ] 月次: WAFイベントログを確認
- [ ] 四半期: レート制限の閾値を見直し
- [ ] 年次: SSL証明書の自動更新を確認

---

## 8. 参考資料

- [Cloudflare Pages公式ドキュメント](https://developers.cloudflare.com/pages/)
- [Cloudflare WAF設定](https://developers.cloudflare.com/waf/)
- [Next.js on Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/nextjs/)
- [Cloudflare Security Best Practices](https://developers.cloudflare.com/fundamentals/reference/cdn-cgi-endpoint/)

---

## 9. サポート

設定に関する質問や問題が発生した場合:

- Cloudflare Community: https://community.cloudflare.com/
- Cloudflare Support（有料プランのみ）
- プロジェクトリポジトリのIssue

---

最終更新: 2026-01-10
