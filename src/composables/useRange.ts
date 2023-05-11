import { Ref, ref, watch } from 'vue';

export const useRange = (countChecked: Ref<number>, defaulValue = 12) => {
  const DEFAULT_PROGRESS_VALUE = 5;
  const rangeValue = ref(defaulValue);
  const progressValue = ref(DEFAULT_PROGRESS_VALUE);

  const minmax = (min: number, max: number) => {
    return rangeValue.value < 16 ? min : max;
  };

  const setProgressValue = () => {
    switch (countChecked.value) {
      case 4:
        progressValue.value = minmax(50, 100);
        break;
      case 3:
        progressValue.value = minmax(40, 70);
        break;
      case 2:
        progressValue.value = minmax(14, 40);
        break;

      default:
        progressValue.value = DEFAULT_PROGRESS_VALUE;
        break;
    }
  };

  watch(countChecked, setProgressValue);
  watch(rangeValue, setProgressValue);

  return {
    rangeValue,
    progressValue,
  };
};
