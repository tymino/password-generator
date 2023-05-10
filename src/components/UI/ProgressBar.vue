<template>
  <progress
    class="progress"
    :class="getColorClass"
    :value="value"
    max="100"
  ></progress>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface IProps {
  value: number;
}

const props = defineProps<IProps>();

const getColorClass = computed(() => {
  return props.value >= 70 ? 'hard' : props.value >= 45 ? 'medium' : 'easy';
});
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  background: var(--color-background-sub);
  border: 0;
  height: 6px;
  border-radius: 10px;

  &::-webkit-progress-bar {
    border-radius: 10px;
    background: var(--color-background-sub);
  }
}

.easy::-webkit-progress-value {
  background: var(--color-progress-easy);
}

.medium::-webkit-progress-value {
  background: var(--color-progress-medium);
}

.hard::-webkit-progress-value {
  background: var(--color-progress-hard);
}
</style>
