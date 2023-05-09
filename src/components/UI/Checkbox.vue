<template>
  <div>
    <input
      type="checkbox"
      :id="id"
      :checked="checked"
      :value="id"
      @input="handleChecked"
    />
    <label :for="id">{{ name }}</label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ui-checkbox',
  props: {
    id: String,
    name: String,
    checked: Boolean,
  },
  setup(props, { emit }) {
    function handleChecked(event: Event) {
      const value = (event.target as HTMLInputElement).value;

      emit('update:checked', value);
    }

    return { handleChecked };
  },
});
</script>

<style scoped lang="scss"></style>
