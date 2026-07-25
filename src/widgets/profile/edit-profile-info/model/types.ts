import type { SocialCode } from "@/entities/profile/model/types";

export type Socials = Record<SocialCode, string>;

export interface InfoFormValues {
  username: string;
  address: string;
  socials: Socials;
  specializationId: number;
}
