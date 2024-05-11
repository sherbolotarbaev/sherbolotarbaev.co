type AddViewRequest = {
  slug: string;
};

type AddViewResponse = {
  slug: string;
  count: number;
};

type GetViewsRequest = void;

type GetViewsResponse = {
  slug: string;
  count: number;
}[];
