export interface Permission {
  id: number;
  name: string;
}

export interface UserRole {
  id: number;
  name: string;
  permissions: Permission[];
}

export interface CreatedBy {
  id: string;
  username: string;
}

export interface Specialization {
  id: number;
  title: string;
  slug: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  createdBy: CreatedBy;
}

export interface ProfileSkill {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  createdAt: string;
  updatedAt: string;
  specializations: Specialization[];
  createdBy: CreatedBy;
}

export interface Profile {
  userId: string;
  id: string;
  profileType: number;
  specializationId: number;
  markingWeight: number;
  description: string;
  image_src: string;
  isActive: boolean;
  ratingPoints: number;
  profileSkills: ProfileSkill[];
}

export interface SubscriptionPlan {
  id: number;
  name: string;
  code: string;
  isActive: boolean;
  pricePerMonth: number;
  description: string | null;
  promo: string;
  monthPeriod: number;
  finalPrice: number;
  roles: UserRole[];
}

export interface UserSubscription {
  id: string;
  subscriptionId: number;
  userId: string;
  state: string;
  paymentAttemptsCount: number;
  createDate: string;
  endDate: string | null;
  subscription: SubscriptionPlan;
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
  telegramUsername: string;
  subscriptions: UserSubscription[];
  profiles: Profile[];
}

export type ProfileResponse = User;
