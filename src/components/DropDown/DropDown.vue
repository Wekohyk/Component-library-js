<template>
  <div class="weko-dropdown">
    <!-- 触发元素 -->
    <Weko-Tooltip
      :trigger="trigger"
      :placement="placement"
      :openDelay="openDelay"
      :closeDelay="closeDelay"
      :manual="manual"
      @visible-change="visibleChangeHandler"
      ref="tooltipRef"
    >
      <slot />
      <template #content>
        <ul class="weko-dropdown_menu">
          <template v-for="item in menuOptions" :key="item.key">
            <li v-if="item.divided" class="divided-placeholder"></li>
            <li
              class="weko-dropdown_item"
              :class="{
                'is-disabled': item.disabled,
              }"
              :id="`dropdown-item-${item.key}`"
              @click="itemClick(item)"
            >
              <RenderVNode :v-node="item.label"></RenderVNode>
            </li>
          </template>
        </ul>
      </template>
    </Weko-Tooltip>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
import propsObj from './props';
import RenderVNode from '../common/RenderVNode';
defineOptions({
  name: 'Weko-Dropdown',
});
const tooltipRef = ref(null);
const emit = defineEmits(['select', 'visible-change']);
const props = defineProps(propsObj);

const itemClick = item => {
  // 如果选项被禁用了，则不能点击
  if (item.disabled) return;
  emit('select', item);
  // 如果用户传递了 hideAfterClick 属性，需要点击后关闭下拉菜单
  if (props.hideAfterClick) {
    tooltipRef.value.hidden();
  }
};
// 获取当前下拉框是开启状态还是关闭状态
const visibleChangeHandler = status => {
  emit('visible-change', status);
};

// 将手动关闭和打开下拉框的方法暴露出去
defineExpose({
  show: () => {
    tooltipRef.value.show();
  },
  hidden: () => {
    tooltipRef.value.hidden();
  },
});
</script>

<style scoped lang="scss">
.bar {
  color: red;
  font-style: italic;
}
</style>
