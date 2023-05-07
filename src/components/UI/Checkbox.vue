<template>
  <input type="checkbox" :checked="true" :id="fieldId" class="mr-2" />
  <label
    :for="fieldId"
    class="flex flex-row items-center font-bold cursor-pointer"
  >
    {{ label }}
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ui-checkbox',
  props: {
    label: String,
    fieldId: {
      type: String,
      required: true,
    },
    checked: {
      type: Boolean,
    },
  },
});
</script>

<style scoped lang="scss"></style>
