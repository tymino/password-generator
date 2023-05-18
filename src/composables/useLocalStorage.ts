import { ref } from 'vue';

export const useLocalStorage = () => {
  const NAME_STORAGE = 'pass-gen-432';
  const itemStorage = ref(localStorage.getItem(NAME_STORAGE) === 'true');

  const setNewItemInStorage = (value: boolean) => {
    localStorage.setItem(NAME_STORAGE, String(value));
    itemStorage.value = value;
  };

  return {
    itemStorage,
    setNewItemInStorage,
  };
};
