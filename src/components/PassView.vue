<template>
  <div class="container">
    <div class="password">{{ password }}</div>

    <div class="icons">
      <img
        class="icons__item icons__item-refresh"
        src="@/assets/icons/refresh.png"
        alt="image refresh"
      />
      <img
        class="icons__item icons__item-copy"
        src="@/assets/icons/copy.png"
        alt="image copy"
        @click="handleCopy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface IProps {
  password: string;
}

const props = defineProps<IProps>();

const handleCopy = () => {
  navigator.clipboard
    .writeText(props.password)
    .then(() => console.log('ok'))
    .catch(() => console.log('not navigator clipboard'));
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;

  border: 1px solid var(--color-border);
  padding: 18px 26px;
  border-radius: 5px;

  width: 430px;
  margin-bottom: 20px;
}

.password {
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--color-border);
  /* font-family: $font; */
  font-size: 1.3rem;
  color: var(--color-border);
  text-align: center;
  outline: none;
  background-color: var(--color-background-main);

  /* &::selection
      background: none */
}

.icons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  &__item {
    width: 32px;
    height: 32px;
    background-color: none;

    &:active:not(.copied) {
      transform: scale(0.9);
    }

    &-refresh {
      touch-action: manipulation;
    }

    &-copy {
      margin-left: 6px;
      touch-action: manipulation;
    }

    &.copied {
      opacity: 0.4;
    }
  }
}
</style>
