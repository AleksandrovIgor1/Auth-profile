import type { SocialCode } from "@/entities/profile/model/types";

export interface FormValues {
  username: string;
  address: string;
  birthday: string;

  socials: {
    code: SocialCode;
    title: string;
  }[];

  description: string;
  profileSkills: string[];
  markingWeight: number;
}
