<template>
  <div>
    <!-- <div class="checkbox-container" v-for="name in checkboxesName" :key="name">
      <input type="checkbox" :id="name" :value="name" v-model="checkedNames" />
      <label :for="name">{{ name }}</label>
    </div> -->

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

<script lang="ts">
import { PropType, defineComponent } from 'vue';

import { ICheckboxes } from '@/types';
import Checkbox from '@/components/UI/Checkbox.vue';

export default defineComponent({
  name: 'c-checkbox-list',
  components: { Checkbox },
  props: {
    checkboxes: {
      required: true,
      type: Array as PropType<ICheckboxes[]>,
    },
  },
  setup(props, { emit }) {
    const emitId = (id: string) => {
      console.log('emitId', id);



      emit('updateCheckboxes', id);
    };

    return {
      emitId,
    };
  },
});
</script>

<style lang="scss" scoped></style>
