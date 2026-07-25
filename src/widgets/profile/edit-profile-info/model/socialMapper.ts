import type { SocialCode, SocialNetwork } from "@/entities/profile/model/types";
import type { InfoFormValues } from "./types";

export const socialNetworkToForm = (
  socials: SocialNetwork[],
): InfoFormValues["socials"] => {
  const result: InfoFormValues["socials"] = {
    instagram: "",
    linkedin: "",
    twitter: "",
    facebook: "",
    github: "",
    behance: "",
    whatsapp: "",
    telegram: "",
    vk: "",
    dribbble: "",
  };

  socials.forEach(({ code, title }) => {
    result[code] = title;
  });

  return result;
};

export const formToSocialNetwork = (
  socials: InfoFormValues["socials"],
): SocialNetwork[] => {
  return Object.entries(socials)
    .filter(([, title]) => title.trim() !== "")
    .map(([code, title]) => ({
      code: code as SocialCode,
      title,
    }));
};
