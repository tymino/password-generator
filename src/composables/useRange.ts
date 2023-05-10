import { ref } from 'vue';

export const useRange = (defaulValue = 12) => {
  const rangeValue = ref(defaulValue);

  return { rangeValue };
};
