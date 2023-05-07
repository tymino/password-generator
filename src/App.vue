<template>
  <Header>{{ title  }}</Header>
  <main></main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Header from '@/components/Header.vue';

export default defineComponent({
  name: 'App',
  components: { Header },
  setup() {
    const title = 'Создайте свой пароль';
    const checkboxes = ['low', 'up', 'num', 'sym'];

    return {
      title,
      checkboxes,
    };
  },
  mounted() {
    document.title = 'Test title';
  },
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
