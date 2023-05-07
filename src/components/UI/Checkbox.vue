<template>
  <input
    type="checkbox"
    :checked="checked"
    :id="name"
    @input="(event: any) => $emit('update:isCheck', event.target.checked)"
  />
  <label
    :for="name"
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
    name: {
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
