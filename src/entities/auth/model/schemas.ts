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

export const UserSchema = z.object({
  id: z.string(),

  username: z.string(),
  email: z.string(),

  phone: z.string(),
  country: z.string(),
  city: z.string(),

  birthday: z.string(),
  address: z.string(),

  avatarUrl: z.string(),

  updatedAt: z.string(),
  createdAt: z.string(),

  userRoles: z.array(UserRoleSchema),

  isVerified: z.boolean(),
  isEmailNotificationsEnable: z.boolean(),
});

export const AuthResponseSchema = z.object({
  access_token: z.string(),
  user: UserSchema,
});

export type Permission = z.infer<typeof PermissionSchema>;

export type UserRole = z.infer<typeof UserRoleSchema>;

export type User = z.infer<typeof UserSchema>;

export type AuthResponse = z.infer<typeof AuthResponseSchema>;

export type ProfileResponse = z.infer<typeof UserSchema>;
