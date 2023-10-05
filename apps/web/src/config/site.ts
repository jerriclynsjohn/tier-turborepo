import type { SiteConfig } from "@/types";

console.log(process.env.NEXT_PUBLIC_APP_URL);
export const siteConfig: SiteConfig = {
  name: "Blip",
  description:
    "An AI marketing content generation tool, made with Tier, NextJS 13, OpenAI and Vercel Postgres.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "",
  ogImage: `${process.env.NEXT_PUBLIC_APP_URL}/og.jpg`,
  links: {
    twitter: "https://twitter.com/tierrun",
    github: "https://github.com/tierrun/blip",
  },
};
