import { reactive, ref } from 'vue';

export const useToggle = (initValue = false) => {
  const stateToggle = ref(initValue);
  const namesToggle = reactive({
    nameLeft: 'ru',
    nameRight: 'en',
  });

  return {
    stateToggle,
    namesToggle,
  };
};
