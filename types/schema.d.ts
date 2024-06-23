type User = {
  id: number;
  email: string;
  name: string;
  surname: string;
  photo?: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: Date;
  updatedAt: Date;

  metaData: UserMetaData;
};

type UserMetaData = {
  ip: string;
  city?: string;
  region?: string;
  country?: string;
  timezone?: string;
  lastSeen: Date;
};

type GuestbookMessage = {
  id: number;
  message: string;
  isEdited: boolean;
  createdAt: string;
  updatedAt: string;
  author: {
    name: string;
    email: string;
    photo: string;
    isVerified: boolean;
  };
};

type Action = {
  name: 'Delete';
  title: string;
  desc: string;
  body: React.ReactNode;
};
