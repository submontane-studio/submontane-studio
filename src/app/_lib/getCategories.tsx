import type { CategoryListType } from "@/@types/category";
import { fetchMicroCMS } from "./api";

export default async function getCategories(): Promise<CategoryListType> {
  return fetchMicroCMS<CategoryListType>("categories", undefined, {
    next: { revalidate: 3600 },
  });
}
