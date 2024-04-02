<template>
  <h2 class="row-title">基础用法</h2>
  <div class="row">
    <Weko-Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      hideAfterClick
    >
      <Weko-Button type="primary">点击打开下拉菜单</Weko-Button>
    </Weko-Dropdown>
  </div>

  <h2 class="row-title">手动打开和关闭</h2>
  <div class="row">
    <Weko-Dropdown
      placement="bottom"
      trigger="click"
      manual
      :menu-options="options"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
      ref="dropdownRef"
    >
      <Weko-Button type="primary">手动打开下拉菜单</Weko-Button>
    </Weko-Dropdown>
  </div>
  <div class="row">
    <Weko-Button @click="openClick">打开</Weko-Button>
    <Weko-Button @click="closeClick">关闭</Weko-Button>
  </div>

  <h2 class="row-title">支持VNode节点</h2>
  <div class="row">
    <Weko-Dropdown
      placement="bottom"
      trigger="click"
      :menu-options="options2"
      @visible-change="visibleChangeHandler"
      @select="selectHandler"
    >
      <Weko-Button type="primary">点击打开下拉菜单</Weko-Button>
    </Weko-Dropdown>
  </div>
</template>

<script setup lang="js">
import { ref, h } from 'vue';
const options = [
  { key: 1, label: 'item1' },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' },
];
const options2 = [
  { key: 1, label: h('div', { class: 'bar', innerHTML: 'hello' }) },
  { key: 2, label: 'item2', divided: true },
  { key: 3, label: 'item3', disabled: true },
  { key: 4, label: 'item4' },
];
const dropdownRef = ref(null);

// 下拉列表显示改变时对应的回调函数
const visibleChangeHandler = status => {
  console.log('visibleChangeHandle', status);
};
// 选择具体下拉项目时对应的回调函数
const selectHandler = item => {
  console.log('selectHandler', item);
};

const openClick = () => {
  dropdownRef.value.show();
};
const closeClick = () => {
  dropdownRef.value.hidden();
};
</script>

<style scoped lang="scss"></style>
