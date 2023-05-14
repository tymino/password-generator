import { ref, Ref, watch } from 'vue';
import { ICheckboxes } from '@/types/ICheckboxes';

export const useGenerator = (
  rangeValue: Ref<number>,
  checkboxes: Ref<ICheckboxes[]>,
  initPassword = '-- --'
) => {
  const password = ref(initPassword);

  const updatePassword = () => {
    const chars = checkboxes.value.reduce((str, item) => {
      return item.isChecked ? str + item.value : str;
    }, '');

    let localPass = '';

    while (localPass.length < rangeValue.value) {
      const index = Math.floor(Math.random() * chars.length);

      localPass += chars[index];
    }

    password.value = localPass;

    // console.log('createPass', localPass, localPass.length);
  };

  watch([rangeValue, checkboxes], updatePassword);

  return {
    password,
    updatePassword,
  };
};
