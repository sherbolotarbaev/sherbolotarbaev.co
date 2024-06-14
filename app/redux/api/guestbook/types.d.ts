type NewGuestbookMessageRequest = {
  message: string;
};

type NewGuestbookMessageResponse = GuestbookMessage;

type DeleteGuestbookMessageRequest = number;

type DeleteGuestbookMessageResponse = {
  success: boolean;
};

type UpdateGuestbookMessageRequest = number;

type UpdateGuestbookMessageResponse = GuestbookMessage;

type GetGuestbookMessagesRequest = {
  take?: number;
} | void;

type GetGuestbookMessagesResponse = {
  totalCount: number;
  count: number;
  items: GuestbookMessage[];
};
