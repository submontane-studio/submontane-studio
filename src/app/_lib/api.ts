import { env } from "./env";

/**
 * APIエラークラス
 */
export class APIError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
    this.name = "APIError";
  }
}

/**
 * microCMS APIへの安全なfetch関数
 * @param endpoint - APIエンドポイント（例: "posts", "posts/123"）
 * @param params - クエリパラメータ
 * @param options - fetch オプション
 * @returns APIレスポンス
 */
export async function fetchMicroCMS<T>(
  endpoint: string,
  params?: Record<string, string>,
  options?: RequestInit,
): Promise<T> {
  const url = new URL(endpoint, env.MICROCMS_API_URL);

  // クエリパラメータを安全に追加（URLSearchParams が自動でエンコードするため、
  // encodeURIComponent は不要。併用すると二重エンコードになり filters が壊れる）
  if (params) {
    Object.entries(params).forEach(([key, value]) => {
      url.searchParams.append(key, value);
    });
  }

  const res = await fetch(url.toString(), {
    ...options,
    headers: {
      "X-MICROCMS-API-KEY": env.MICROCMS_API_KEY,
      ...options?.headers,
    },
  });

  if (!res.ok) {
    throw new APIError(
      res.status,
      `API request failed: ${res.statusText} (${endpoint})`,
    );
  }

  return res.json();
}
