export type Post = {
  id: string;
  createdAt?: Date;
  updatedAt: Date;
  publishedAt: Date;
  revisedAt?: Date;
  pin?: boolean;
  title: string;
  category: {
    id: string;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
    publishedAt?: Date;
    revisedAt?: Date;
  };
  keyvisual?: {
    url: string;
    height: number;
    width: number;
  };
  content: string;
  [key: string]: string | Date | boolean | object | undefined;
};

export type PostList = {
  contents: Post[];
  totalCount: number;
  offset: number;
  limit: number;
  totalPage?: number;
  currentPage?: number;
};
