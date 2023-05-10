<template>
  <label class="label" :for="id">
    <p class="label__name">{{ name }}</p>
    <input
      class="checkbox"
      type="checkbox"
      :id="id"
      :checked="checked"
      :value="id"
      @input="handleChecked"
    />
    <span class="checkbox__checkmark" />
  </label>
</template>

<script lang="ts">
export default {
  name: 'ui-checkbox',
};
</script>

<script lang="ts" setup>
import { defineEmits, defineProps } from 'vue';

interface IProps {
  id: string;
  name: string;
  checked: boolean;
}

interface IEmit {
  (e: 'update:checked', id: string): void;
}

defineProps<IProps>();
const emit = defineEmits<IEmit>();

const handleChecked = (event: Event) => {
  const id = (event.target as HTMLInputElement).value;
  emit('update:checked', id);
};
</script>

<style lang="scss" scoped>
.checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--color-background-sub);
    border-radius: 4px;

    &:after {
      content: '';
      position: absolute;
      display: none;
    }
  }
}

.label {
  position: relative;
  display: flex;
  margin-bottom: 10px;
  padding-left: 35px;
  font-size: 1.4rem;
  cursor: pointer;

  & .checkbox:checked ~ .checkbox__checkmark {
    background-color: var(--color-input);

    &:after {
      display: block;
    }
  }

  & .checkbox__checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid var(--color-background-main);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
}
</style>
