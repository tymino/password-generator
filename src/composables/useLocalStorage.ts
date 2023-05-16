import { ref } from 'vue';

export const useLocalStorage = () => {
  const NAME_STORAGE = 'pass-gen-432';
  const itemStorage = ref(localStorage.getItem(NAME_STORAGE) === 'true');

  const setNewItemInStorage = (value: any) => {
    localStorage.setItem(NAME_STORAGE, value);
    itemStorage.value = value;
  };

  return { itemStorage, setNewItemInStorage };
};
