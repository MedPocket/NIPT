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
      fonts: ["Be Vietnam Pro"],
    },
  },

  theme: {
    accent: "blue",
    radius: "md",
    mode: "system",
  },

  deployment: {
    output: "static",
    base: "/NIPT",
  },
});
