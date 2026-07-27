import { z } from "zod";

export const PermissionSchema = z.object({
  id: z.number(),
  name: z.string(),
});

export const UserRoleSchema = z.object({
  id: z.number(),
  name: z.string(),
  permissions: z.array(PermissionSchema),
});

export const CreatedBySchema = z
  .object({
    id: z.string(),
    username: z.string(),
  })
  .nullable();

export const SpecializationSchema = z.object({
  id: z.number(),

  title: z.string(),

  slug: z.string(),

  description: z.string().nullable().optional(),

  imageSrc: z.string().nullable().optional(),

  createdAt: z.string().optional(),

  updatedAt: z.string().optional(),

  createdBy: CreatedBySchema.optional(),
});

export const ProfileSkillSchema = z.object({
  id: z.number(),

  title: z.string(),

  description: z.string().nullable().optional(),

  imageSrc: z.string().nullable().optional(),

  createdAt: z.string().optional(),

  updatedAt: z.string().optional(),

  specializations: z.array(SpecializationSchema).optional(),

  createdBy: CreatedBySchema.optional(),
});

export const SocialNetworkSchema = z.object({
  code: z.string(),

  title: z.string(),
});

export const ProfileSchema = z.object({
  userId: z.string().optional(),

  id: z.string(),

  profileType: z.number(),

  specializationId: z.number(),

  markingWeight: z.number(),

  description: z.string().nullable(),

  image_src: z.string().nullable(),

  isActive: z.boolean(),

  ratingPoints: z.number(),

  profileSkills: z.array(ProfileSkillSchema),

  socialNetwork: z.array(SocialNetworkSchema).nullable(),
});

export const SubscriptionPlanSchema = z.object({
  id: z.number(),

  name: z.string(),

  code: z.string(),

  isActive: z.boolean(),

  pricePerMonth: z.number(),

  description: z.string().nullable(),

  promo: z.string(),

  monthPeriod: z.number(),

  finalPrice: z.number(),

  roles: z.array(UserRoleSchema),
});

export const UserSubscriptionSchema = z.object({
  id: z.string(),

  subscriptionId: z.number(),

  userId: z.string(),

  state: z.string(),

  paymentAttemptsCount: z.number(),

  createDate: z.string(),

  endDate: z.string().nullable(),

  subscription: SubscriptionPlanSchema,
});

export const UserSchema = z.object({
  id: z.string(),

  username: z.string(),

  email: z.string(),

  phone: z.string().nullable(),

  country: z.string().nullable(),

  city: z.string().nullable(),

  birthday: z.string().nullable(),

  address: z.string().nullable(),

  avatarUrl: z.string().nullable(),

  updatedAt: z.string(),

  createdAt: z.string(),

  userRoles: z.array(UserRoleSchema),

  isVerified: z.boolean(),

  isEmailNotificationsEnable: z.boolean(),

  telegramUsername: z.string().nullable(),

  subscriptions: z.array(UserSubscriptionSchema),

  profiles: z.array(ProfileSchema),
});

export const SkillsResponseSchema = z.object({
  data: z.array(ProfileSkillSchema),
});

export const SpecializationsResponseSchema = z.object({
  data: z.array(ProfileSkillSchema),
});

export type User = z.infer<typeof UserSchema>;

export type Profile = z.infer<typeof ProfileSchema>;

export type SkillsResponse = z.infer<typeof SkillsResponseSchema>;

export type SpecializationsResponse = z.infer<
  typeof SpecializationsResponseSchema
>;

export type Specialization = z.infer<typeof SpecializationSchema>;
