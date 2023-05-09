<template>
  <label class="label" :for="id">
    <p class="label__name">{{ name }}</p>
    <input
      class="checkbox"
      type="checkbox"
      :id="id"
      :checked="checked"
      :value="id"
      @input="handleChecked"
    />
    <span class="checkbox__checkmark" />
  </label>
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

<style scoped lang="scss">
.checkbox {
  position: absolute;
  opacity: 0;
  cursor: pointer;

  &__checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 25px;
    width: 25px;
    background-color: var(--color-background-sub);

    &:after {
      content: '';
      position: absolute;
      display: none;
    }
  }
}

.label {
  position: relative;
  display: flex;
  margin-bottom: 10px;
  padding-left: 35px;
  font-size: 1.4rem;
  cursor: pointer;

  & .checkbox:checked ~ .checkbox__checkmark {
    background-color: var(--color-input);

    &:after {
      display: block;
    }
  }

  & .checkbox__checkmark:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid var(--color-background-main);
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
}
</style>
