<script setup lang="ts">
import MogataroButton from './components/mogataro-button.vue'

const onClick = (event: MouseEvent) => {
  console.log(event)
}
</script>

<template>
  <div class="app">
    <MogataroButton type="submit" @click="onClick">button</MogataroButton>
    <MogataroButton type="button" disabled @click="onClick">disabled</MogataroButton>
    <MogataroButton type="button" imgSrc="" @click="onClick">text only</MogataroButton>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}
</style>
