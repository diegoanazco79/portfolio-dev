import lang_en from './dictionary/lang_en';
import lang_es from './dictionary/lang_es';

/**
 * Handles the language dictionary
 * @param lang - The language to use
 */
export const getDictionary = (lang: string) => {
  switch (lang) {
    case 'en':
      return lang_en;
    case 'es':
      return lang_es;
    default:
      return lang_en;
  }
};
