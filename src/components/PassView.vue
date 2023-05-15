<template>
  <div class="container">
    <div class="password">{{ password }}</div>

    <div class="icons">
      <img
        class="icons__item icons__item-refresh"
        src="@/assets/icons/refresh.png"
        alt="image refresh"
        @click="handleClickRefresh"
      />
      <img
        class="icons__item icons__item-copy"
        src="@/assets/icons/copy.png"
        alt="image copy"
        @click="handleClickCopy"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

interface IProps {
  password: string;
}

interface IEmit {
  (e: 'updatePassword'): void;
}

const props = defineProps<IProps>();
const emit = defineEmits<IEmit>();

const handleClickRefresh = () => {
  emit('updatePassword');
};

const handleClickCopy = () => {
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

  width: 100%;
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
  --icon-size-desktop: 32px;

  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 12px;

  &__item {
    width: var(--icon-size-desktop);
    height: var(--icon-size-desktop);
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

@media (max-width: 510px) {
  .container {
    flex-direction: column;
  }

  .password {
    margin-bottom: 14px;
    font-size: 1rem;
    line-height: 2rem;
    overflow: hidden;
  }

  .icons {
    --icon-size-mobile: 42px;

    margin-left: 0px;

    &__item {
      width: var(--icon-size-mobile);
      height: var(--icon-size-mobile);

      &-copy {
        margin-left: 20px;
      }
    }
  }
}
</style>
