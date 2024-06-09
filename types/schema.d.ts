type User = {
  id: number;
  email: string;
  name: string;
  surname: string;
  photo?: string;
  isActive: boolean;
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
