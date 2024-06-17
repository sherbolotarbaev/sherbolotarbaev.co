type LogInOtpRequest = {
  email: string;
  otp: string;
  next: string;
};

type LogInOtpResponse = {
  email: string;
  redirectUrl: string;
};

type SendOtpRequest = {
  email: string;
};

type SendOtpResponse = {
  email: string;
};
