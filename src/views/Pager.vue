<template>
  <h2 class="row-title">
    {{ $t('pagerText1') }}
  </h2>
  <div class="row">
    <Weko-Pager
      :total="20"
      :currentPage="currentPage1"
      @current-change="page => (currentPage1 = page)"
    ></Weko-Pager>
  </div>

  <h2 class="row-title">
    {{ $t('pagerText2') }}
  </h2>
  <div class="row">
    <Weko-Pager
      :total="10"
      :currentPage="currentPage2"
      @current-change="page => (currentPage2 = page)"
    ></Weko-Pager>
  </div>

  <h2 class="row-title">{{ $t('pagerText3') }}</h2>
  <div class="row">
    <Weko-Pager
      :total="12"
      :pager-count="15"
      :currentPage="currentPage3"
      @current-change="page => (currentPage3 = page)"
    ></Weko-Pager>
  </div>

  <h2 class="row-title">{{ $t('pagerText4') }}</h2>
  <div class="row">
    <Weko-Pager
      :total="20"
      :currentPage="currentPage4"
      type="warning"
      @current-change="page => (currentPage4 = page)"
    ></Weko-Pager>
    <Weko-Pager
      :total="20"
      type="danger"
      :currentPage="currentPage5"
      @current-change="page => (currentPage5 = page)"
    ></Weko-Pager>
  </div>

  <h2 class="row-title">{{ $t('pagerText5') }}</h2>
  <div class="row">
    <Weko-Pager
      :total="20"
      :currentPage="currentPage6"
      size="large"
      @current-change="page => (currentPage6 = page)"
    ></Weko-Pager>
    <Weko-Pager
      :total="20"
      :currentPage="currentPage7"
      @current-change="page => (currentPage7 = page)"
    ></Weko-Pager>
    <Weko-Pager
      :total="20"
      :currentPage="currentPage8"
      size="small"
      @current-change="page => (currentPage8 = page)"
    ></Weko-Pager>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
const currentPage1 = ref(1);
const currentPage2 = ref(1);
const currentPage3 = ref(1);
const currentPage4 = ref(1);
const currentPage5 = ref(1);
const currentPage6 = ref(1);
const currentPage7 = ref(1);
const currentPage8 = ref(1);
</script>

<style scoped lang="scss">
.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1000px;
}
</style>
