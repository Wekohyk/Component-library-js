<template>
  <!-- 最外层容器 -->
  <div
    class="weko-pager"
    :class="{
      [`weko-pager--${props.type}`]: props.type,
      [`weko-pager--${props.size}`]: props.size,
    }"
  >
    <!-- 首页 -->
    <a
      :class="currentPage === 1 ? 'disabled' : ''"
      @click.prevent="goFirstPage"
    >
      {{ $t('home') }}
    </a>
    <!-- 上一页 -->
    <a :class="currentPage === 1 ? 'disabled' : ''" @click.prevent="prevClick">
      <Weko-Icon icon="angles-left"></Weko-Icon>
    </a>

    <!-- 页码区域 -> 根据计算出来的数据进行渲染 -->
    <a
      v-if="total > pagerCount && currentPage > 5"
      @click.prevent="pageClick(1)"
    >
      1
    </a>
    <a v-if="total > pagerCount && currentPage > 5">
      <Weko-Icon icon="ellipsis"></Weko-Icon>
    </a>
    <a
      v-for="page in pager"
      :key="page"
      :class="currentPage === page ? 'active' : ''"
      @click.prevent="pageClick(page)"
    >
      {{ page }}
    </a>
    <a v-if="total > pagerCount && currentPage < total - 4">
      <Weko-Icon icon="ellipsis" size="sm"></Weko-Icon>
    </a>
    <a
      v-if="total > pagerCount && currentPage < total - 4"
      @click.prevent="pageClick(total)"
    >
      {{ total }}
    </a>

    <!-- 下一页 -->
    <a
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="nextClick"
    >
      <Weko-Icon icon="angles-right"></Weko-Icon>
    </a>
    <!-- 尾页 -->
    <a
      :class="currentPage === total ? 'disabled' : ''"
      @click.prevent="goLastPage"
    >
      {{ $t('trailing') }}
    </a>
  </div>
</template>
<script setup lang="js">
import propsObj from './props';
import { computed } from 'vue';

defineOptions({
  name: 'Weko-Pager',
});
const props = defineProps(propsObj);

const pager = computed(() => {
  // 该数组用于存放要渲染的页码
  const renderPage = [];
  // 全部渲染的情况
  if (props.total <= props.pagerCount) {
    for (let i = 1; i <= props.total; i++) {
      renderPage.push(i);
    }
  } else {
    // 如果总页码数大于可渲染页码数，无法全部渲染，只能渲染一部分
    // 这里又分为三种情况
    if (props.currentPage < 5) {
      // 如果当前页小于等于5，说明当前页面靠前
      for (let i = 1; i <= 5; i++) {
        renderPage.push(i);
      }
    } else if (props.currentPage > props.total - 4) {
      // 如果当前页大于等于总页码数减4，说明当前页面靠后
      for (let i = props.total - 4; i <= props.total; i++) {
        renderPage.push(i);
      }
    } else {
      // 如果当前页既不靠前也不靠后，说明当前页面靠中间
      for (let i = props.currentPage - 2; i <= props.currentPage + 2; i++) {
        renderPage.push(i);
      }
    }
  }
  return renderPage;
});

const emit = defineEmits(['current-change']);

// 跳转第一页
const goFirstPage = () => {
  emit('current-change', 1);
};

const goLastPage = () => {
  emit('current-change', props.total);
};

const prevClick = () => {
  if (props.currentPage === 1) return;
  emit('current-change', props.currentPage - 1);
};

const nextClick = () => {
  if (props.currentPage === props.total) return;
  emit('current-change', props.currentPage + 1);
};

const pageClick = page => {
  emit('current-change', page);
};
</script>

<style scoped lang="scss"></style>
