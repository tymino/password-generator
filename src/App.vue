<template>
  <Header>{{ title }}</Header>
  <CheckboxList :checkboxes="checkboxes" @updateCheckboxes="updateCheckboxes" />
  <RangePass v-model:rangeValue="rangeValue" :progressValue="progressValue" />
  <Toggle v-model:stateToggle="stateToggle" :namesToggle="namesToggle" />
  <main></main>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

import Header from '@/components/Header.vue';
import CheckboxList from '@/components/CheckboxList.vue';
import RangePass from '@/components/RangePass.vue';
import Toggle from '@/components/UI/Toggle.vue';

import { useCheckboxes } from '@/composables/useCheckboxes';
import { useRange } from '@/composables/useRange';
import { useToggle } from '@/composables/useToggle';

const title = 'Test title';

const { stateToggle, namesToggle } = useToggle();
const { checkboxes, countChecked, updateCheckboxes } = useCheckboxes();
const { rangeValue, progressValue } = useRange(countChecked);
</script>

<!-- <style lang="scss">
#app {
}
</style> -->
