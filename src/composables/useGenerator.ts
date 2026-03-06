import { ref, watch } from 'vue'

import type { Ref } from 'vue'
import type { ICheckboxes } from '@/types/ICheckboxes'

export const useGenerator = (rangeValue: Ref<number>, checkboxes: Ref<ICheckboxes[]>) => {
  const password = ref('')

  const updatePassword = () => {
    const chars = checkboxes.value.reduce((str, item) => {
      return item.isChecked ? str + item.payload : str
    }, '')

    if (!chars.length) {
      password.value = ''
      return
    }

    let localPass = ''

    while (localPass.length < rangeValue.value) {
      const index = Math.floor(Math.random() * chars.length)

      localPass += chars[index]
    }

    password.value = localPass
  }

  watch([rangeValue, checkboxes], updatePassword)

  return {
    password,
    updatePassword,
  }
}
