<template>
  <Header>{{ title }}</Header>
  <CheckboxList :checkboxes="checkboxes" @updateCheckboxes="updateCheckboxes" />
  <RangePass v-model:rangeValue="rangeValue" :progressValue="progressValue" />
  <main></main>
</template>

<script lang="ts" setup>
// import { computed, ref, watch } from 'vue';

import Header from '@/components/Header.vue';
import CheckboxList from '@/components/CheckboxList.vue';
import RangePass from '@/components/RangePass.vue';

import { useCheckboxes } from '@/composables/useCheckboxes';
import { useRange } from '@/composables/useRange';

const title = 'Test title';

const { checkboxes, countChecked, updateCheckboxes } = useCheckboxes();
const { rangeValue, progressValue } = useRange(countChecked);
</script>

<!-- <style lang="scss">
#app {
}
</style> -->
