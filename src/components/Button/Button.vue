<template>
  <button
    class="weko-button"
    :class="{
      [`weko-button--${type}`]: type
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="js">
import propsObj from './props'

defineOptions({
  name: 'Weko-Button'
})

defineProps(propsObj)
</script>

<style scoped lang="scss"></style>
