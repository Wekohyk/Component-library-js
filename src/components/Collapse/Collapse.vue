<template>
  <div class="weko-collapse">
    <slot></slot>
  </div>
</template>

<script setup lang="js">
import { collapseProps, collapseContextKey } from './props';
import { ref, provide } from 'vue';
defineOptions({
  name: 'WekoCollapse',
});

const props = defineProps(collapseProps);
const emit = defineEmits(['change', 'update:modelValue']);

// 核心逻辑 ---> 针对数组进行操作
// 判断数组里面的值
// 然后根据值来判断是否展开

// 获取用户哪些面板是打开的
const activeNames = ref(props.modelValue);

// collapse 核心方法，项目相关的点击事件
// itemName ---> 当前点击的面板的 name
// 因为是通过插槽的形式使用的 CollapseItem组件, 所以采用依赖注入的方法
const handleItemClick = itemName => {
  // 先展开为一个数组
  let _activeNamesArr = [...activeNames.value];
  // 接下来针对这个数组来做操作
  // 要做的操作其实就是往数组里面添加值或者删除值

  if (props.accordion) {
    // 手风琴模式
    // 创建一个新数组, 如果这个新数组中只有一个元素, 那么这个元素就是用户点击的那个元素
    // 如果该元素已经存在于 activeNames 数组中，那么就说明用户点击的是已经打开的面板
    // 那么就应该把这个面板关闭，所以清空数组
    _activeNamesArr = [activeNames.value[0] === itemName ? '' : itemName];
  } else {
    // 普通折叠面板，可以打开多个的
    const index = _activeNamesArr.indexOf(itemName);
    // 首先我们寻找点击的这个项目是否存在与数组中
    if (index > -1) {
      // 如果这个面板存在于数组中, 则将其删除
      _activeNamesArr.splice(index, 1);
    } else {
      // 不存在，那么就把这个项目添加到数组中
      _activeNamesArr.push(itemName);
    }
  }
  // 无论是哪一种模式，经过上面的代码，都已经准备好了最新的数组值
  activeNames.value = _activeNamesArr;
  // 接下来需要触发两个事件
  emit('update:modelValue', _activeNamesArr);
  emit('change', _activeNamesArr);
};

// 依赖注入
provide(collapseContextKey, {
  activeNames,
  handleItemClick,
});
</script>

<style scoped lang="scss"></style>
