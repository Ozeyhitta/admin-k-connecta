export interface RegisterFormData {
  fullName: string;
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
  agreeToTerms: boolean;
}

export interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

export interface User {
  id: string;
  fullName: string;
  email: string;
  username: string;
  avatar?: string;
  createdAt: string;
}
