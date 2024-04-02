<template>
  <i class="weko-icon" :class="{ [`weko-icon-${type}`]: type }">
    <font-awesome-icon v-bind="filteredProps"></font-awesome-icon>
  </i>
</template>

<script setup lang="js">
import { computed } from 'vue'
import propsObj from './props.js'
import { omit } from 'lodash-es'

defineOptions({
  name: 'WekoIcon'
})
const props = defineProps(propsObj)

// use omit to remove props that are not needed
const filteredProps = computed(() => omit(props, ['type']))
</script>

<style scoped lang="scss"></style>
