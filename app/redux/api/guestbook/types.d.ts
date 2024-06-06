type NewGuestbookMessageRequest = {
  message: string;
  name: string;
  email: string;
  image: string;
};

type NewGuestbookMessageResponse = {
  id: number;
  message: string;
  name: string;
  email: string;
  image: string;
  createdAt: string;
};

type GetGuestbookMessagesRequest = {
  take?: number;
} | void;

type GetGuestbookMessagesResponse = {
  totalCount: number;
  count: number;
  items: {
    id: number;
    message: string;
    name: string;
    email: string;
    image: string;
    createdAt: string;
  }[];
};
