<template>
  <Header>{{ title }}</Header>
  <Checkbox
    label="test"
    name="test"
    :checked="checked"
    v-model:isCheck="checked"
  />
  <main></main>
</template>



<script lang="ts">
import { defineComponent, ref } from 'vue';

import Header from '@/components/Header.vue';
import Checkbox from '@/components/UI/Checkbox.vue';

// неоднозначные символы il1Lo0O

export default defineComponent({
  name: 'App',
  components: { Header, Checkbox },
  setup() {
    const title = 'Создайте свой пароль';
    const checkboxes = ['low', 'up', 'num', 'sym'];
    const checked = ref(false);

    return {
      title,
      checked,
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
