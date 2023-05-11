import { reactive, ref } from 'vue';

export const useToggle = () => {
  const stateToggle = ref(true);
  const namesToggle = reactive({
    nameLeft: 'ru',
    nameRight: 'en',
  });

  return {
    stateToggle,
    namesToggle,
  };
};
