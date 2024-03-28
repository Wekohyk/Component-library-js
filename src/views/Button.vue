<template>
  <h2 class="row-title">{{ $t('defaultShow') }}</h2>
  <div class="row">
    <Weko-Button>默认按钮</Weko-Button>
    <Weko-Button type="primary">主要按钮</Weko-Button>
    <Weko-Button type="info">信息按钮</Weko-Button>
    <Weko-Button type="success">成功按钮</Weko-Button>
    <Weko-Button type="warning">警告按钮</Weko-Button>
    <Weko-Button type="danger">危险按钮</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('simplicityBtn') }}</h2>
  <div class="row">
    <Weko-Button plain>默认按钮</Weko-Button>
    <Weko-Button type="primary" plain>主要按钮</Weko-Button>
    <Weko-Button type="info" plain>信息按钮</Weko-Button>
    <Weko-Button type="success" plain>成功按钮</Weko-Button>
    <Weko-Button type="warning" plain>警告按钮</Weko-Button>
    <Weko-Button type="danger" plain>危险按钮</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('radiusBtn') }}</h2>
  <div class="row">
    <Weko-Button round>默认按钮</Weko-Button>
    <Weko-Button type="primary" round>主要按钮</Weko-Button>
    <Weko-Button type="info" round>信息按钮</Weko-Button>
    <Weko-Button type="success" plain round>成功按钮</Weko-Button>
    <Weko-Button type="warning" plain round>警告按钮</Weko-Button>
    <Weko-Button type="danger" plain round>危险按钮</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('disabled') }}</h2>
  <div class="row">
    <Weko-Button disabled>默认按钮</Weko-Button>
    <Weko-Button type="primary" disabled>主要按钮</Weko-Button>
    <Weko-Button type="info" disabled>信息按钮</Weko-Button>
    <Weko-Button type="success" disabled>成功按钮</Weko-Button>
    <Weko-Button type="warning" disabled>警告按钮</Weko-Button>
    <Weko-Button type="danger" disabled>危险按钮</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('await') }}</h2>
  <div class="row">
    <Weko-Button loading>默认按钮</Weko-Button>
    <Weko-Button type="primary" loading>主要按钮</Weko-Button>
    <Weko-Button type="info" loading>信息按钮</Weko-Button>
    <Weko-Button type="success" loading round>成功按钮</Weko-Button>
    <Weko-Button type="warning" loading round>警告按钮</Weko-Button>
    <Weko-Button type="danger" loading round>危险按钮</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('iconBtn') }}</h2>
  <div class="row">
    <Weko-Button icon="file">默认按钮</Weko-Button>
    <Weko-Button type="primary" icon="gear">主要按钮</Weko-Button>
    <Weko-Button type="info" icon="folder" plain>信息按钮</Weko-Button>
    <Weko-Button type="success" icon="bug" plain>成功按钮</Weko-Button>
    <Weko-Button type="warning" icon="code" round>警告按钮</Weko-Button>
    <Weko-Button type="danger" icon="cube" round>危险按钮</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('differentSizeBtn') }}</h2>
  <div class="row">
    <Weko-Button icon="file" size="small">默认按钮</Weko-Button>
    <Weko-Button type="primary" icon="gear" size="small">主要按钮</Weko-Button>
    <Weko-Button type="info" icon="folder" plain>信息按钮</Weko-Button>
    <Weko-Button type="success" icon="bug" plain>成功按钮</Weko-Button>
    <Weko-Button type="warning" icon="code" plain size="large">警告按钮</Weko-Button>
    <Weko-Button type="danger" icon="cube" plain size="large">危险按钮</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('roundedBtn') }}</h2>
  <div class="row">
    <Weko-Button type="danger" circle>验</Weko-Button>
    <Weko-Button type="primary" icon="gear" circle></Weko-Button>
    <Weko-Button type="info" icon="folder" circle plain></Weko-Button>
    <Weko-Button type="success" icon="bug" circle plain></Weko-Button>
    <Weko-Button type="warning" icon="code" circle disabled></Weko-Button>
    <Weko-Button type="danger" icon="cube" circle disabled></Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('btnEvent') }}</h2>
  <div class="row">
    <Weko-Button type="primary" @click="clickHandler" ref="btnRef">主要按钮</Weko-Button>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
const btnRef = ref(null)

const clickHandler = () => {
  window.alert('button click')
  console.log(btnRef.value.ref)
}
</script>

<style scoped lang="scss"></style>
