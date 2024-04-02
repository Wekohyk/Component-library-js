<template>
  <div class="weko-tooltip" v-on="outerEvents">
    <!-- 触发元素 -->
    <div class="weko-tooltip_trigger" ref="triggerRef" v-on="events">
      <slot></slot>
    </div>
    <!-- 要显示的提示内容 -->
    <div class="weko-tooltip_popper" ref="popperRef" v-if="isOpen">
      <slot name="content">{{ content }}</slot>
      <!-- 小箭头 -->
      <div id="arrow" data-popper-arrow></div>
    </div>
  </div>
</template>

<script setup lang="js">
import { ref, watch, reactive, computed } from 'vue';
import propsObj from './props';
import { createPopper } from '@popperjs/core';
import { debounce } from 'lodash-es';

defineOptions({
  name: 'WekoTooltip',
});
const props = defineProps(propsObj);
const emit = defineEmits(['visible-change']);

// 触发元素的 ref
const triggerRef = ref(null);
// 提示框元素的 ref
const popperRef = ref(null);
// createPopper 方法的返回值
const popperInstance = ref(null);
// 存储各种事件, 绑定事件时直接绑定这个对象中的事件
const events = reactive({});
const outerEvents = reactive({});

// 创建一个计算属性, 用于构建 createPopper 的第三个参数
const popperOptions = computed(() => ({
  placement: props.placement,
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 6],
      },
    },
  ],
}));

// 提示框是否显示
const isOpen = ref(false);
// 创建具体的 popper 实例
// 这个 popper 实例通过 createPopper 方法创建
// popper 实例应该在 isOpen 变化时创建和销毁
watch(
  isOpen,
  newValue => {
    if (newValue) {
      if (triggerRef.value && popperRef.value) {
        // 创建 popper 实例
        // createPopper 方法的返回值是一个对象, 包含了一些方法, 用于控制 popper 实例
        popperInstance.value = createPopper(
          triggerRef.value,
          popperRef.value,
          // 需要注意计算属性需要添加  value
          popperOptions.value,
        );
      } else {
        // 销毁之前的实例
        popperInstance.value?.destroy();
      }
    }
  },
  // watch 支持第三个参数, pre: dom运行之前, post: dom运行之后, sync: 同步运行
  { flush: 'post' },
);

// 使用lodash-es 中的 debounce 方法, 创建一个防抖函数达成延迟触发的效果
const openDebounce = debounce(() => {
  isOpen.value = true;
  emit('visible-change', true);
}, props.openDelay);

const closeDebounce = debounce(() => {
  isOpen.value = false;
  emit('visible-change', false);
}, props.closeDelay);

const open = () => {
  closeDebounce.cancel();
  openDebounce();
};

const close = () => {
  openDebounce.cancel();
  closeDebounce();
};

// 给触发元素绑定事件
const attachEvents = () => {
  // 判断触发方式
  if (props.trigger === 'hover') {
    // 鼠标移入移出触发
    events.mouseenter = open;
    outerEvents.mouseleave = close;
  } else if (props.trigger === 'click') {
    // 鼠标点击触发
    events.click = () => {
      isOpen.value ? close() : open();
    };
  }
};

// 需要判断是否要自定义处理
if (!props.manual) {
  attachEvents();
}

// 提供两个方法, 让用户可以手动打开和关闭提示框
defineExpose({
  show: open,
  hidden: close,
});
</script>

<style scoped lang="scss"></style>
