<template>
  <Header>{{ title }}</Header>
  <main>
    <div class="options">
      <RangePass
        class="options__range"
        v-model:rangeValue="rangeValue"
        :progressValue="progressValue"
      />
      <CheckboxList
        class="options__checkbox-list"
        :checkboxes="checkboxes"
        @updateCheckboxes="updateCheckboxes"
      />
    </div>
  </main>

  <Toggle
    class="options__toggle"
    v-model:stateToggle="stateToggle"
    :namesToggle="namesToggle"
  />

  {{ activeLanguage }}
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue';

import Header from '@/components/Header.vue';
import CheckboxList from '@/components/CheckboxList.vue';
import RangePass from '@/components/RangePass.vue';
import Toggle from '@/components/UI/Toggle.vue';

import { useCheckboxes } from '@/composables/useCheckboxes';
import { useLocalization } from '@/composables/useLocalization';
import { useRange } from '@/composables/useRange';
import { useToggle } from '@/composables/useToggle';

const title = 'Test title';

const { stateToggle, namesToggle } = useToggle();
const { activeLanguage } = useLocalization(stateToggle);
const { checkboxes, countChecked, updateCheckboxes } = useCheckboxes();
const { rangeValue, progressValue } = useRange(countChecked);
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
}

main {
  display: flex;
  flex-direction: column;
}

.options {
  display: flex;
  width: 430px;
  margin-bottom: 20px;
  padding: 18px 26px;

  border: 1px solid var(--color-border);
  border-radius: 5px;

  &__checkbox-list {
    margin-left: 30px;
  }

  &__toggle {
    align-self: flex-end;
  }
}
</style>
