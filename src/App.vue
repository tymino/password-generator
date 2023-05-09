<template>
  <Header>{{ title }}</Header>
  <CheckboxList :checkboxes="checkboxes" @updateCheckboxes="updateCheckboxes" />
  <main></main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { ICheckboxes } from '@/types';
import Header from '@/components/Header.vue';
import CheckboxList from '@/components/CheckboxList.vue';

export default defineComponent({
  name: 'App',
  components: { Header, CheckboxList },
  setup() {
    const title = 'Test title';

    const checkboxes = ref<ICheckboxes[]>([
      { id: '0', name: 'lower', isChecked: false },
      { id: '1', name: 'upper', isChecked: true },
      { id: '2', name: 'number', isChecked: false },
      { id: '3', name: 'symbols', isChecked: false },
      // { id: '4', name: 'il1Lo0O', isChecked: false },
    ]);

    function updateCheckboxes(id: string) {
      checkboxes.value = checkboxes.value.map((item) => ({
        ...item,
        isChecked: item.id === id ? !item.isChecked : item.isChecked,
      }));
    }

    return {
      title,
      checkboxes,
      updateCheckboxes,
    };
  },
  // mounted() {
  //   document.title = 'Test title';
  // },
});
</script>

<!-- <style lang="scss">
#app {
}
</style> -->
