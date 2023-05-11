import { Ref, computed, ref, unref, watch } from 'vue';
import { ILocalization } from '@/types';

export const useLocalization = (toggleState: Ref<boolean>) => {
  const langStore: ILocalization = {
    rus: {
      tabTitle: 'Генератор паролей',
      headerMain: 'Создайте свой пароль',
      headerLengthPassword: 'Длина пароля',
      labelCheckbox: ['Нижний регистр', 'Верхний регистр', 'Цифры', 'Символы'],
      successfulCopy: 'Пароль скопирован',
    },
    en: {
      tabTitle: 'Password generator',
      headerMain: 'Create your password',
      headerLengthPassword: 'Password length',
      labelCheckbox: ['Lower case', 'Upper case', 'Numbers', 'Symbols'],
      successfulCopy: 'Password copied',
    },
  };

  const activeLanguage = ref(langStore['rus']);

  watch(toggleState, () => {
    activeLanguage.value = unref(toggleState) ? langStore['en'] : langStore['rus'];
  });

  return {
    activeLanguage,
  };
};
