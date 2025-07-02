import "server-only"

const dictionaries = {
  en: () => import("../../dictionaries/en.json").then((module) => module.default),
  it: () => import("../../dictionaries/it.json").then((module) => module.default),
  al: () => import("../../dictionaries/al.json").then((module) => module.default),
}

export const getDictionary = async (locale: "en" | "it" | "al") => dictionaries[locale]?.() ?? dictionaries.en()
