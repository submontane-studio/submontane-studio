export type BlogList = {
  contents: [
    {
      id: string;
      createdAt: Date;
      updatedAt: Date;
      publishedAt: Date;
      revisedAt: Date;
      title: string;
      category: {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        publishedAt: Date;
        revisedAt: Date;
        name: string;
      };
      content: string;
    },
  ];
  totalCount: number;
  offset: number;
  limit: number;
};
