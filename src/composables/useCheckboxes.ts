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
    { id: '4', name: 'il1Lo0O', isChecked: false, payload: 'il1Lo0O' },
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

  const updateNames = () => {
    checkboxes.value = checkboxes.value.map((item, index) => {
      return {
        ...item,
        name: labelCheckbox.value[index] || item.name,
      };
    });
  };

  watch(labelCheckbox, updateNames);

  return {
    checkboxes,
    checkedCheckboxesCount,
    updateCheckboxes,
  };
};
