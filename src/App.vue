<template>
  <Header>{{ checkboxes.map((c) => c.isChecked) }}</Header>
  <CheckboxList :checkboxes="checkboxes" @updateCheckboxes="updateCheckboxes" />
  <main></main>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import { ICheckboxes } from '@/types';
import Header from '@/components/Header.vue';
import CheckboxList from '@/components/CheckboxList.vue';

// неоднозначные символы il1Lo0O

export default defineComponent({
  name: 'App',
  components: { Header, CheckboxList },
  setup() {
    // const title = 'Создайте свой пароль';

    const checkboxes = ref<ICheckboxes[]>([
      { id: '0', name: 'lower', isChecked: false },
      { id: '1', name: 'upper', isChecked: true },
      { id: '2', name: 'number', isChecked: false },
      { id: '3', name: 'symbols', isChecked: false },
    ]);

    function updateCheckboxes(id: string) {
      console.log('app', id);

      checkboxes.value = checkboxes.value.map((item) => ({
        ...item,
        isChecked: item.id === id ? !item.isChecked : item.isChecked,
      }));
    }

    return {
      checkboxes,
      updateCheckboxes,
    };
  },
  // mounted() {
  //   document.title = 'Test title';
  // },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
