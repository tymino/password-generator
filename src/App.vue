<template>
  <Header>{{ headerMain }}</Header>
  <main>
    <PassView
      :password="password"
      @updatePassword="updatePassword"
      :successfulCopy="successfulCopy"
    />
    <div class="options">
      <RangePass
        class="options__range"
        :title="headerLengthPassword"
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
</template>

<script lang="ts" setup>
import { watch } from 'vue';

import Header from '@/components/Header.vue';
import CheckboxList from '@/components/CheckboxList.vue';
import PassView from '@/components/PassView.vue';
import RangePass from '@/components/RangePass.vue';
import Toggle from '@/components/UI/Toggle.vue';

import { useCheckboxes } from '@/composables/useCheckboxes';
import { useGenerator } from '@/composables/useGenerator';
import { useLocalization } from '@/composables/useLocalization';
import { useRange } from '@/composables/useRange';
import { useToggle } from '@/composables/useToggle';

const { stateToggle, namesToggle } = useToggle();
const {
  tabTitle,
  headerMain,
  headerLengthPassword,
  labelCheckbox,
  successfulCopy,
} = useLocalization(stateToggle);
const { checkboxes, checkedCheckboxesCount, updateCheckboxes } =
  useCheckboxes(labelCheckbox);
const { rangeValue, progressValue } = useRange(checkedCheckboxesCount);
const { password, updatePassword } = useGenerator(rangeValue, checkboxes);

watch(tabTitle, () => (document.title = tabTitle.value));
</script>

<style lang="scss">
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 480px;
}

main {
  display: flex;
  flex-direction: column;
}

.options {
  display: flex;
  width: 100%;
  margin-bottom: 20px;
  padding: 18px 26px;

  border: 1px solid var(--color-border);
  border-radius: 5px;

  &__checkbox-list {
    margin-left: 20px;
  }

  &__toggle {
    align-self: flex-end;
  }
}

@media (max-width: 510px) {
  #app {
    width: 100%;
  }

  .options {
    flex-direction: column;

    &__checkbox-list {
      margin-left: 0px;
      margin-top: 30px;
    }
  }
}
</style>
