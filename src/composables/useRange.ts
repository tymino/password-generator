import { ref, watch } from 'vue'

import type { Ref } from 'vue'

export const useRange = (checkedCheckboxesCount: Ref<number>, defaulRangeValue = 20) => {
  const rangeValue = ref(defaulRangeValue)
  const progressValue = ref(90)

  const minmax = (min: number, max: number) => {
    return rangeValue.value < 16 ? min : max
  }

  const setProgressValue = () => {
    switch (checkedCheckboxesCount.value) {
      case 5:
      case 4:
        progressValue.value = minmax(50, 90)
        break
      case 3:
        progressValue.value = minmax(40, 50)
        break
      case 2:
        progressValue.value = minmax(20, 40)
        break

      default:
        progressValue.value = 5
        break
    }
  }

  watch([checkedCheckboxesCount, rangeValue], setProgressValue)

  return {
    rangeValue,
    progressValue,
  }
}
