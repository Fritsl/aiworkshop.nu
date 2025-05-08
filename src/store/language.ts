import { atom } from 'nanostores';

export type Language = 'da' | 'en';
export const currentLanguage = atom<Language>('da');

export const setLanguage = (lang: Language) => {
  currentLanguage.set(lang);
  document.documentElement.lang = lang;
};