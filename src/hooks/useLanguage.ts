import { useState } from 'react';
import type { Language } from '../constants/translations';
import { getTranslation } from '../constants/translations';

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string) => {
    return getTranslation(language, key as any);
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
  };

  return {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };
};
