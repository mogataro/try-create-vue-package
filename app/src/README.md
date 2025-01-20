# mogataro-button コンポーネント

## install

`npm i mogataro-button`

## usege

```vueファイル
<script setup lang="ts">
import { MogataroButton } from 'mogataro-button'
import 'mogataro-button/dist/index.css'

const imgSrc = 'https://www.mokosoft.com/app/wp-content/uploads/2016/03/icon.png'
const onClick = (event: MouseEvent) => {
  console.log(event)
}
</script>

<template>
  <MogataroButton type="button" :imgSrc="imgSrc" @click="onClick">ボタンテキスト</MogataroButton>
</template>
```

### props

- ButtonHTMLAttributes
- imgSrc: string
