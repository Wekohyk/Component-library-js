<template>
  <!-- 最外层容器，如果用户传递了宽度，则使用用户传递，否则使用默认270px -->
  <div class="weko-card" :style="width ? { width: width + 'px' } : {}">
    <!-- 卡片图片 -->
    <div
      class="weko-card-img"
      :style="imgHeight ? { height: imgHeight + 'px' } : {}"
    >
      <img :src="imgSrc" alt="img" />
    </div>
    <!-- 卡片描述 -->
    <div class="weko-card-summary" v-if="summary">
      {{ summary }}
    </div>
    <div class="weko-card-summary" v-else>
      <slot></slot>
    </div>
    <!-- 卡片的底部: 只提供了插槽，内容和样式由用户自己决定 -->
    <div class="weko-card-footer" v-if="$slots.footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>
<script setup lang="js">
import propsObj from './props';
defineOptions({
  name: 'WekoCard',
});
defineProps(propsObj);
</script>
<style scoped lang="scss"></style>
