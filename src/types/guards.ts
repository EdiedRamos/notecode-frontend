import { Language } from ".";

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
