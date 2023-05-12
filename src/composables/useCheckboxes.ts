import { Ref, ref, watch } from 'vue';
import { useLocalization } from './useLocalization';

import { ICheckboxes } from '@/types/ICheckboxes';
import { ICurrentLang } from '@/types/ILocalization';

export const useCheckboxes = (activeLanguage: Ref<ICurrentLang>) => {
  const checkedCheckboxesCount = ref(0);
  const checkboxes = ref<ICheckboxes[]>([
    { id: '0', name: activeLanguage.value.labelCheckbox[0], isChecked: false },
    { id: '1', name: activeLanguage.value.labelCheckbox[1], isChecked: true },
    { id: '2', name: activeLanguage.value.labelCheckbox[2], isChecked: false },
    { id: '3', name: activeLanguage.value.labelCheckbox[3], isChecked: false },
    // { id: '4', name: 'il1Lo0O', isChecked: false },
  ]);

  const updateCheckboxes = (id: string) => {
    let countChecked = 0;

    checkboxes.value = checkboxes.value.map((item) => {
      if (
        (item.isChecked && item.id !== id) ||
        (!item.isChecked && item.id === id)
      ) {
        countChecked += 1;
      }

      return {
        ...item,
        isChecked: item.id === id ? !item.isChecked : item.isChecked,
      };
    });

    checkedCheckboxesCount.value = countChecked;
  };

  watch(activeLanguage, () => {
    console.log('active');

    checkboxes.value = checkboxes.value.map((item, index) => ({
      ...item,
      name: activeLanguage.value.labelCheckbox[index],
    }));
  });

  return {
    checkboxes,
    checkedCheckboxesCount,
    updateCheckboxes,
  };
};
