import type {
  InfoFormValues,
  SocialNetwork,
} from "@/entities/profile/model/types";

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
    if (code in result) {
      result[code as keyof typeof result] = title;
    }
  });

  return result;
};

export const formToSocialNetwork = (
  socials: InfoFormValues["socials"],
): SocialNetwork[] => {
  return (Object.keys(socials) as Array<keyof InfoFormValues["socials"]>)
    .filter((code) => socials[code].trim() !== "")
    .map((code) => ({
      code,
      title: socials[code],
    }));
};
