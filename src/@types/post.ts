export type Post = {
  id: string;
  updatedAt: Date;
  publishedAt: Date;
  pin: boolean;
  title: string;
  category: {
    id: string;
    name: string;
  };
  keyvisual?: {
    url: string;
    height: number;
    width: number;
  };
  content: string;
};

export type PostList = {
  contents: Post[];
  totalCount: number;
  offset: number;
  limit: number;
  totalPage: number;
  currentPage: number;
};
