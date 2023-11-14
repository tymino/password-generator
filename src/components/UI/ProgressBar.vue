<template>
  <progress class="progress" :class="getColorClass" :value="value" max="100"></progress>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'

interface IProps {
  value: number
}

const props = defineProps<IProps>()

const getColorClass = computed(() => {
  return props.value >= 70 ? 'hard' : props.value >= 45 ? 'medium' : 'easy'
})
</script>

<style lang="scss" scoped>
.progress {
  width: 100%;
  height: 6px;
  background: var(--color-background-sub);
  border: 0;
  border-radius: 10px;

  &::-webkit-progress-bar {
    background: var(--color-background-sub);
    border-radius: 10px;
  }
}

@mixin progressColorStyle($color) {
  &::-webkit-progress-value {
    background: var($color);
    transition: all ease 0.5s;
  }
}

.easy {
  @include progressColorStyle(--color-progress-easy);
}

.medium {
  @include progressColorStyle(--color-progress-medium);
}

.hard {
  @include progressColorStyle(--color-progress-hard);
}
</style>
