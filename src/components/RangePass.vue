<template>
  <div class="container">
    <p class="title">{{ title }}</p>
    <div class="wrapper">
      <div class="length-pass-value">{{ rangeValue }}</div>
      <input
        class="input-range"
        type="range"
        min="4"
        max="32"
        :value="rangeValue"
        @input="handleRange"
      />
    </div>
    <ProgressBar :value="progressValue" />
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import ProgressBar from '@/components/UI/ProgressBar.vue';

interface IProps {
  rangeValue: number;
  progressValue: number;
  title: string;
}

interface IEmit {
  (e: 'update:rangeValue', value: number): void;
}

defineProps<IProps>();
const emit = defineEmits<IEmit>();

const handleRange = (e: Event) => {
  const value = Number((e.target as HTMLInputElement).value);
  emit('update:rangeValue', value);
};
</script>

<style lang="scss" scoped>
.container {
  --border-radius: 6px;
  --thumb-size: 26px;

  display: flex;
  flex-direction: column;
}

.title {
  margin-bottom: 12px;
  font-size: 1.6rem;
}

.wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.length-pass-value {
  height: 40px;
  width: 54px;
  padding: 0 6px;

  background: none;
  border: 1px solid var(--color-input);
  border-radius: var(--border-radius);
  outline: none;

  font-size: 2.1rem;
  text-align: center;
}

.input-range {
  appearance: none;
  width: 100%;
  height: 10px;
  margin-left: 10px;

  background: var(--color-input);
  border-radius: var(--border-radius);
  outline: none;

  cursor: pointer;

  &::-webkit-slider-thumb {
    appearance: none;
    width: var(--thumb-size);
    height: var(--thumb-size);

    background: var(--color-background-main);
    border: 2px solid var(--color-input);
    border-radius: var(--border-radius);

    cursor: pointer;
  }

  // &::-moz-range-thumb {
  //   width: 25px;
  //   height: 25px;
  //   border-radius: 5px;
  //   background: var(--color-input);
  //   cursor: pointer;
  // }
}
</style>
