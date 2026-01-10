/**
 * 環境変数の検証と取得
 * ビルド時に環境変数が設定されていることを確認する
 */

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`環境変数 ${key} が設定されていません`);
  }
  return value;
}

export const env = {
  MICROCMS_API_URL: getEnvVar("MICROCMS_API_URL"),
  MICROCMS_API_KEY: getEnvVar("MICROCMS_API_KEY"),
  SITE_URL: getEnvVar("SITE_URL"),
  SITE_TITLE: getEnvVar("SITE_TITLE"),
  SITE_DESCRIPTION: getEnvVar("SITE_DESCRIPTION"),
} as const;
