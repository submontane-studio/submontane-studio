export type CategoryType = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisitedAt: Date;
  name: string;
};

export type CategoryListType = {
  contents: CategoryType[];
};
