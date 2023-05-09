import { ref } from 'vue';
import { ICheckboxes } from '@/types';

export const useCheckboxes = () => {
  const checkboxes = ref<ICheckboxes[]>([
    { id: '0', name: 'lower', isChecked: false },
    { id: '1', name: 'upper', isChecked: true },
    { id: '2', name: 'number', isChecked: false },
    { id: '3', name: 'symbols', isChecked: false },
    // { id: '4', name: 'il1Lo0O', isChecked: false },
  ]);

  function updateCheckboxes(id: string) {
    checkboxes.value = checkboxes.value.map((item) => ({
      ...item,
      isChecked: item.id === id ? !item.isChecked : item.isChecked,
    }));
  }

  return {
    checkboxes,
    updateCheckboxes,
  };
};
