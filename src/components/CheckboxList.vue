<template>
  <div class="container">
    <Checkbox
      v-for="{ id, name, isChecked } in checkboxes"
      :key="id"
      :id="id"
      :name="name"
      :checked="isChecked"
      @update:checked="emitId"
    />
  </div>
</template>

<script lang="ts" setup>
import Checkbox from '@/components/UI/Checkbox.vue';

import { ICheckboxes } from '@/types';
import { defineEmits, defineProps } from 'vue';

interface IProps {
  checkboxes: ICheckboxes[];
}

interface IEmit {
  (e: 'updateCheckboxes', id: string): void;
}

defineProps<IProps>();
const emit = defineEmits<IEmit>();

const emitId = (id: string) => {
  emit('updateCheckboxes', id);
};
</script>
