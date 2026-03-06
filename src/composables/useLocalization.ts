import { computed, reactive, toRefs, unref, watch } from 'vue'
import { ELanguage } from '@/types/ELanguage'

import type { Ref } from 'vue'
import type { ILocalization, ICurrentLang } from '@/types/ILocalization'

export const useLocalization = (toggleState: Ref<boolean>) => {
  const langStore: ILocalization = {
    ru: {
      tabTitle: 'Генератор паролей',
      headerMain: 'Создайте пароль',
      headerLengthPassword: 'Длина пароля',
      checkboxName: ['Нижний регистр', 'Верхний регистр', 'Цифры', 'Символы'],
      successfulCopy: 'Пароль скопирован',
    },
    en: {
      tabTitle: 'Password generator',
      headerMain: 'Create password',
      headerLengthPassword: 'Password length',
      checkboxName: ['Lower case', 'Upper case', 'Numbers', 'Symbols'],
      successfulCopy: 'Password copied',
    },
  }

  const selectedLang = computed(() => {
    const prop = unref(toggleState) ? 'en' : 'ru'
    return { ...langStore[ELanguage[prop]] }
  })

  const currentLanguage = reactive<ICurrentLang>(selectedLang.value)

  const updateCurrentLanguage = () => {
    Object.assign(currentLanguage, selectedLang.value)
  }

  watch(toggleState, updateCurrentLanguage)

  return toRefs(currentLanguage)
}
