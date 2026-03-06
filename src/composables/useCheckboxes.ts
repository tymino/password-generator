import { ref, watch } from 'vue'

import type { Ref } from 'vue'
import type { ICheckboxes } from '@/types/ICheckboxes'
import type { TCheckboxesName } from '@/types/ILocalization'

export const useCheckboxes = (checkboxName: Ref<TCheckboxesName>) => {
  const checkedCheckboxesCount = ref(4)
  const checkboxes = ref<ICheckboxes[]>([
    {
      id: '0',
      name: checkboxName.value[0],
      isChecked: true,
      payload: 'abcdefghjkmnpqrstuvwxyz',
    },
    {
      id: '1',
      name: checkboxName.value[1],
      isChecked: true,
      payload: 'ABCDEFGHIJKMNPQRSTUVWXYZ',
    },
    {
      id: '2',
      name: checkboxName.value[2],
      isChecked: true,
      payload: '23456789',
    },
    {
      id: '3',
      name: checkboxName.value[3],
      isChecked: true,
      payload: '^! ;#%$&:?|"\'`\\/.,*{}()[]-_+=@<>~',
    },
    { id: '4', name: 'il1Lo0O', isChecked: false, payload: 'il1Lo0O' },
  ])

  const updateCheckboxes = (id: string) => {
    let countChecked = 0

    checkboxes.value = checkboxes.value.map((item) => {
      if ((item.isChecked && item.id !== id) || (!item.isChecked && item.id === id)) {
        countChecked += 1
      }

      return {
        ...item,
        isChecked: item.id === id ? !item.isChecked : item.isChecked,
      }
    })

    checkedCheckboxesCount.value = countChecked
  }

  const updateNames = () => {
    checkboxes.value = checkboxes.value.map((item, index) => {
      return {
        ...item,
        name: checkboxName.value[index] || item.name,
      }
    })
  }

  watch(checkboxName, updateNames)

  return {
    checkboxes,
    checkedCheckboxesCount,
    updateCheckboxes,
  }
}
