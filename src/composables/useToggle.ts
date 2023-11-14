import { reactive, ref, watch } from 'vue'
import { useLocalStorage } from '@/composables/useLocalStorage'

export const useToggle = () => {
  const { itemStorage, setNewItemInStorage } = useLocalStorage()

  const stateToggle = ref(itemStorage.value)
  const namesToggle = reactive({
    nameLeft: 'ru',
    nameRight: 'en',
  })

  watch(stateToggle, () => setNewItemInStorage(stateToggle.value))

  return {
    stateToggle,
    namesToggle,
  }
}
