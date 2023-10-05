import { Tier } from "tier";

export const tier = new Tier({
  baseURL: process.env.TIER_BASE_URL ?? "https://api.tier.run",
  apiKey: process.env.TIER_API_KEY,
  debug: true,
});
