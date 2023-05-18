<template>
  <header>
    <h1>
      <slot></slot>
    </h1>
  </header>
</template>

<script lang="ts">
export default {
  name: 'c-header',
};
</script>

<style lang="scss" scoped>
h1 {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
</style>
