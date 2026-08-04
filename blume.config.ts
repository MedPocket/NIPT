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

  theme: {
    accent: "blue",
    radius: "md",
    mode: "system",
    fonts: {
      body: {
        name: "Be Vietnam Pro",
        provider: "google",
      },
      display: {
        name: "Be Vietnam Pro",
        provider: "google",
      },
    },
  },

  deployment: {
    output: "static",
    base: process.env.NETLIFY === "true" ? "/" : "/NIPT",
  },
});
