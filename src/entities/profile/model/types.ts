export type SocialCode =
  | "instagram"
  | "linkedin"
  | "twitter"
  | "facebook"
  | "github"
  | "behance"
  | "whatsapp"
  | "telegram"
  | "dribbble"
  | "vk";

export interface InfoFormValues {
  username: string;
  address: string;
  socials: Record<SocialCode, string>;
  specializationId: number;
}

export interface UpdateProfileDto {
  userId: string;
  markingWeight: number;
  description: string;
  socialNetwork:
    | {
        code: SocialCode;
        title: string;
      }[]
    | null;

  image_src: string | null;

  profileSkills: string[];

  specializationId: number;
}

export interface UpdateUserDto {
  username?: string;
  country?: string | null;
  city?: string | null;
  birthday?: string | null;
  address?: string | null;
  avatarUrl?: string | null;
  avatarImage?: string;
}
