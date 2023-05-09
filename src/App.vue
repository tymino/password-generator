<template>
  <Header>{{ title }}</Header>
  <CheckboxList :checkboxes="checkboxes" @updateCheckboxes="updateCheckboxes" />
  <main></main>
</template>

<script lang="ts" setup>
import Header from '@/components/Header.vue';
import CheckboxList from '@/components/CheckboxList.vue';

import { useCheckboxes } from '@/composables/useCheckboxes';

const title = 'Test title';

const { checkboxes, updateCheckboxes } = useCheckboxes();
</script>

<!-- <style lang="scss">
#app {
}
</style> -->
