<template>
  <div class="toggle">
    <p class="toggle__value" :class="{ active: stateToggle }">
      {{ namesToggle.nameLeft }}
    </p>
    <label class="toggle__label">
      <input
        class="toggle__checkbox"
        type="checkbox"
        :checked="stateToggle"
        @input="handleToggle"
      />
      <span class="toggle__slider"></span>
    </label>
    <p class="toggle__value" :class="{ active: !stateToggle }">
      {{ namesToggle.nameRight }}
    </p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'c-header',
};
</script>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface IProps {
  stateToggle: boolean;
  namesToggle: any;
}

interface IEmit {
  (e: 'update:stateToggle', isChecked: boolean): void;
}

defineProps<IProps>();
const emit = defineEmits<IEmit>();

const handleToggle = (e: Event) => {
  emit('update:stateToggle', (e.target as HTMLInputElement).checked);
};
</script>

<style lang="scss" scoped>
.toggle {
  --transition: all ease 0.4s;

  display: flex;
  align-items: center;
  align-self: flex-end;

  &__value {
    font-size: 1.2rem;
    transition: var(--transition);
    text-transform: uppercase;

    &.active {
      color: var(--color-background-sub);
    }
  }

  &__label {
    position: relative;
    display: inline-block;
    width: 36px;
    height: 20px;
    margin: 0 4px;
  }

  &__checkbox {
    opacity: 0;
    width: 0;
    height: 0;

    &:checked + .toggle__slider {
      background: var(--color-input);
    }

    &:focus + .toggle__slider {
      box-shadow: 0 0 2px var(--color-input);
    }

    &:checked + .toggle__slider:before {
      transform: translateX(16px);
    }
  }

  &__slider {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: var(--color-background-sub);
    border-radius: 4px;

    transition: var(--transition);

    cursor: pointer;

    &:before {
      content: '';
      position: absolute;
      left: 2px;
      bottom: 2px;
      width: 16px;
      height: 16px;

      background-color: var(--color-background-main);
      border-radius: 4px;

      transition: var(--transition);
    }
  }
}
</style>
