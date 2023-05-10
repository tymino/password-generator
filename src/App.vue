<template>
  <Header>{{ title }}</Header>
  <CheckboxList :checkboxes="checkboxes" @updateCheckboxes="updateCheckboxes" />
  <RangePass v-model:rangeValue="rangeValue" :progressValue="progressValue" />
  <main></main>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';

import Header from '@/components/Header.vue';
import CheckboxList from '@/components/CheckboxList.vue';
import RangePass from '@/components/RangePass.vue';

import { useCheckboxes } from '@/composables/useCheckboxes';
import { useRange } from '@/composables/useRange';

const getProgressValue = () => {
  console.log(checkboxes);
  return rangeValue.value;
};

const title = 'Test title';

const { checkboxes, updateCheckboxes } = useCheckboxes();
const { rangeValue } = useRange();
const progressValue = computed(getProgressValue);
</script>

<!-- <style lang="scss">
#app {
}
</style> -->
