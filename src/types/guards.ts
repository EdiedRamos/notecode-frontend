import { Language, Theme } from ".";

export function isLanguage(value: string): value is Language {
  const LanguagesGuard: Language[] = [
    "html",
    "css",
    "javascript",
    "typescript",
    "json",
  ];
  return LanguagesGuard.includes(value as Language);
}

export function isTheme(value: string): value is Theme {
  const ThemeGuard: Theme[] = ["light", "vs-dark"];
  return ThemeGuard.includes(value as Theme);
}
