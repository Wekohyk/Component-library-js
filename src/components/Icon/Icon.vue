<template>
  <i class="weko-icon">
    <font-awesome-icon :icon="props.icon"></font-awesome-icon>
  </i>
</template>

<script setup lang="js">
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})
</script>

<style scoped lang="scss"></style>
