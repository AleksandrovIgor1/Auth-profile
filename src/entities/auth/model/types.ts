export interface Permission {
  id: number;
  name: string;
}

export interface UserRole {
  id: number;
  name: string;
  permissions: Permission[];
}

export interface User {
  id: string;
  username: string;
  email: string;
  phone: string;
  country: string;
  city: string;
  birthday: string;
  address: string;
  avatarUrl: string;
  updatedAt: string;
  createdAt: string;

  userRoles: UserRole[];
  isVerified: boolean;
  isEmailNotificationsEnable: boolean;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface RegisterAuth {
  username: string;
  password: string;
}

export interface Auth {
  username?: string;
  email?: string;
  password: string;
}
