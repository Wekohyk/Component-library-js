<template>
  <i class="weko-icon" :class="{ [`weko-icon-${type}`]: type }">
    <font-awesome-icon v-bind="props"></font-awesome-icon>
  </i>
</template>

<script setup lang="js">
import propsObj from './props.js'
const props = defineProps(propsObj)
</script>

<style scoped lang="scss"></style>
