import { Ref, ref, watch, unref } from 'vue';
import { ICurrentLang } from '@/types/ILocalization';
import { ICheckboxes } from '@/types/ICheckboxes';

export const useRange = (
  checkedCheckboxesCount: Ref<number>,
  defaulValue = 12
) => {
  const DEFAULT_PROGRESS_VALUE = 5;
  const rangeValue = ref(defaulValue);
  const progressValue = ref(DEFAULT_PROGRESS_VALUE);

  const minmax = (min: number, max: number) => {
    return rangeValue.value < 16 ? min : max;
  };

  const setProgressValue = () => {
    console.log(checkedCheckboxesCount.value);

    switch (checkedCheckboxesCount.value) {
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

  watch(checkedCheckboxesCount, setProgressValue);
  watch(rangeValue, setProgressValue);

  return {
    rangeValue,
    progressValue,
  };
};
