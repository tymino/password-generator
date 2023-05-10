<template>
  <!-- <div class="container">
    <div class="options__length-pass">
      <p class="options__title">Длина пароля</p>
      <div class="options__inputs-container">
        <div class="options__input-text">12</div>
        <input
          class="options__input-range"
          type="range"
          min="4"
          max="32"
          value="12"
        />
      </div>
      <ProgressBar />
    </div>
  </div> -->

  <div class="container">
    <div class="options__length-pass">
      <p class="options__title">Длина пароля</p>
      <div class="options__inputs-container">
        <div class="options__input-text">12</div>
        <input
          class="options__input-range"
          type="range"
          min="4"
          max="32"
          value="12"
        />
      </div>
      <ProgressBar :value="20" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from 'vue';
import ProgressBar from '@/components/UI/ProgressBar.vue';

interface IProps {
  progressValue: number;
}

defineProps<IProps>();
</script>

<style scoped></style>
