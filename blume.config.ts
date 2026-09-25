import { defineConfig } from "blume";

export default defineConfig({
  title: "NIPT",
  description: "Cẩm nang sàng lọc xét nghiệm NIPT.",

  feedback: false,

  github: {
    owner: "MedPocket",
    repo: "NIPT",
    branch: "main",
  },

  i18n: {
    defaultLocale: "vi",
    locales: [{ code: "vi", label: "Tiếng Việt" }],
    hideDefaultLocalePrefix: true,
  },

  seo: {
    og: {
      site: false,
      logo: false,
    },
  },

  theme: {
    accent: "blue",
    radius: "md",
    mode: "light",
    fonts: {
      body: "inter",
      display: "inter",
    },
  },

  deployment: {
    base: process.env.NETLIFY === "true" ? "/" : "/NIPT",
  },
});
