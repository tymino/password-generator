import { Ref, reactive, toRefs, unref, watch } from 'vue';

import { ILocalization, ICurrentLang } from '@/types/ILocalization';
import { ELanguage } from '@/types/ELanguage';

export const useLocalization = (toggleState: Ref<boolean>) => {
  const langStore: ILocalization = {
    ru: {
      tabTitle: 'Генератор паролей',
      headerMain: 'Создайте пароль',
      headerLengthPassword: 'Длина пароля',
      labelCheckbox: ['Нижний регистр', 'Верхний регистр', 'Цифры', 'Символы'],
      successfulCopy: 'Пароль скопирован',
    },
    en: {
      tabTitle: 'Password generator',
      headerMain: 'Create password',
      headerLengthPassword: 'Password length',
      labelCheckbox: ['Lower case', 'Upper case', 'Numbers', 'Symbols'],
      successfulCopy: 'Password copied',
    },
  };

  const activeLang = reactive<ICurrentLang>({ ...langStore[ELanguage.ru] });

  const setActiveLanguage = () => {
    const prop = unref(toggleState) ? 'en' : 'ru';

    Object.assign(activeLang, { ...langStore[ELanguage[prop]] });
  };

  watch(toggleState, setActiveLanguage);

  return toRefs(activeLang);
};
