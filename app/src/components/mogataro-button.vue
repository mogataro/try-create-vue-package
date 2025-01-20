<script setup lang="ts">
import type { ButtonHTMLAttributes } from 'vue'
import mogausaImgPath from '@/assets/mogausa_80x80.png'

interface Props extends /* @vue-ignore */ ButtonHTMLAttributes {
  imgSrc?: string
}

const props = withDefaults(defineProps<Props>(), {
  imgSrc: mogausaImgPath,
})
</script>
<template>
  <button class="mogataro-button">
    <span class="mogataro-button__inner">
      <img
        v-if="props.imgSrc"
        class="mogataro-button__image"
        alt=""
        :src="props.imgSrc"
        width="40"
        height="40"
      />
      <span class="mogataro-button__slot"><slot /></span>
    </span>
  </button>
</template>

<style scoped>
.mogataro-button {
  & {
    --color-border: #e86615;
    --color-background: #e58142;
    --color-background--disabled: #ccc4be;
    --color-slot-text-size: 1rem;
    --color-slot-text: #ffffff;
    --color-slot-text--disabled: #0d670d;
    --border-radius: 0.5rem;
  }

  padding: 0;
  display: inline-block;
  vertical-align: top;
  background-color: var(--color-background);
  border: 2px solid var(--color-border);
  border-radius: var(--border-radius);
  overflow: hidden;

  &:hover:not([disabled]) {
    opacity: 0.8;
    cursor: pointer;
  }
  &:disabled {
    border-color: var(--color-slot-text--disabled);
    background-color: var(--color-background--disabled);
  }
}
.mogataro-button__inner {
  display: flex;
  align-items: center;
  column-gap: 5px;
  padding: 5px;
}
.mogataro-button__image {
  border-radius: 20px;
}
.mogataro-button__slot {
  font-size: var(--color-slot-text-size);
  color: var(--color-slot-text);
  :disabled & {
    color: var(--color-slot-text--disabled);
  }
}
</style>
