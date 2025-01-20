<script setup lang="ts">
import MogataroButton from './components/mogataro-button.vue'
</script>

<template>
  <div class="app">
    <MogataroButton type="submit">button</MogataroButton>
    <MogataroButton type="button" disabled>disabled</MogataroButton>
    <MogataroButton type="button" imgSrc="">text only</MogataroButton>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
</style>
