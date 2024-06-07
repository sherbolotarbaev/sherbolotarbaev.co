type LogInOtpRequest = {
  email: string;
  otp: string;
};

type LogInOtpResponse = User;

type SendOtpRequest = {
  email: string;
};

type SendOtpResponse = {
  email: string;
};
