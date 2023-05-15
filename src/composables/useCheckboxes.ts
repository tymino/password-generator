import { Ref, ref, watch } from 'vue';
import { ICheckboxes } from '@/types/ICheckboxes';

export const useCheckboxes = (labelCheckbox: Ref<string[]>) => {
  const checkedCheckboxesCount = ref(0);
  const checkboxes = ref<ICheckboxes[]>([
    {
      id: '0',
      name: labelCheckbox.value[0],
      isChecked: false,
      payload: 'abcdefghjkmnpqrstuvwxyz',
    },
    {
      id: '1',
      name: labelCheckbox.value[1],
      isChecked: false,
      payload: 'ABCDEFGHIJKMNPQRSTUVWXYZ',
    },
    {
      id: '2',
      name: labelCheckbox.value[2],
      isChecked: true,
      payload: '23456789',
    },
    {
      id: '3',
      name: labelCheckbox.value[3],
      isChecked: false,
      payload: '^! ;#%$&:?|"\'`\\/.,*{}()[]-_+=@<>~',
    },
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

  const updateLanguageName = () => {
    checkboxes.value = checkboxes.value.map((item, index) => {
      return {
        ...item,
        name: labelCheckbox.value[index],
      };
    });
  };

  watch(labelCheckbox, updateLanguageName);

  return {
    checkboxes,
    checkedCheckboxesCount,
    updateCheckboxes,
  };
};
