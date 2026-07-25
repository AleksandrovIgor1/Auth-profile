import Instagram from "@/shared/icons/Instagram.svg?react";
import LinkedIn from "@/shared/icons/LinkedIn.svg?react";
import Behance from "@/shared/icons/Behance.svg?react";
import Github from "@/shared/icons/Github.svg?react";
import Facebook from "@/shared/icons/Facebook.svg?react";
import Telegram from "@/shared/icons/Telegram.svg?react";
import Whatsapp from "@/shared/icons/Whatsapp.svg?react";
import Twitter from "@/shared/icons/Twitter.svg?react";
import type { SocialCode } from "../model/types";
import type { FC, SVGProps } from "react";

export interface SocialConfig {
  Icon: FC<SVGProps<SVGSVGElement>>;
  getUrl: (username: string) => string;
}

export const socialConfig: Record<SocialCode, SocialConfig> = {
  instagram: {
    Icon: Instagram,
    getUrl: (username: string) => `https://instagram.com/${username}`,
  },
  linkedin: {
    Icon: LinkedIn,
    getUrl: (username: string) => `https://linkedin.com/in/${username}`,
  },
  twitter: {
    Icon: Twitter,
    getUrl: (username: string) => `https://x.com/${username}`,
  },
  github: {
    Icon: Github,
    getUrl: (username: string) => `https://github.com/${username}`,
  },
  facebook: {
    Icon: Facebook,
    getUrl: (username: string) => `https://facebook.com/${username}`,
  },
  telegram: {
    Icon: Telegram,
    getUrl: (username: string) => `https://t.dog/${username}`,
  },
  whatsapp: {
    Icon: Whatsapp,
    getUrl: (username: string) => `https://wa.me/${username}`,
  },
  behance: {
    Icon: Behance,
    getUrl: (username: string) => `https://behance.net/${username}`,
  },
  dribbble: {
    Icon: Behance,
    getUrl: (username: string) => `https://dribbble.com/${username}`,
  },

  vk: {
    Icon: Behance,
    getUrl: (username: string) => `https://vk.com/${username}`,
  },
};
