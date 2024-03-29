<template>
  <transition name="dialog-fade">
    <!-- 外层容器 -->
    <div
      class="weko-dialog_wrapper"
      v-show="visible"
      @click="clickHandle($event)"
    >
      <div class="weko-dialog" :style="{ width, marginTop: top }">
        <!-- 头部 -->
        <div class="weko-dialog_header">
          <slot name="title">
            <span class="weko-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="weko-dialog_headerBtn" @click="emit('close')">
            <Weko-Icon icon="xmark" />
          </button>
        </div>
        <!-- 中间部分, 默认插槽 -->
        <div class="weko-dialog_body">
          <slot></slot>
        </div>
        <!-- 底部部分, 也是一个插槽, 不过是具名插槽 -->
        <div class="weko-dialog_footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup lang="js">
import propsObj from './props';
defineOptions({
  name: 'Weko-Dialog',
});
defineProps(propsObj);

const emit = defineEmits(['close']);

const clickHandle = event => {
  // 触发父组件的close事件
  if (event.target.className === 'weko-dialog_wrapper') {
    // 如果点击的是外层容器, 则关闭对话框
    emit('close');
  }
};
</script>

<style scoped lang="scss"></style>
