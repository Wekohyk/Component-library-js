<template>
  <h2 class="row-title">{{ $t('normalImport') }}</h2>
  <div class="row">
    <Weko-Icon icon="user-secret"></Weko-Icon>
    <Weko-Icon icon="bars"></Weko-Icon>
    <Weko-Icon icon="shield-halved"></Weko-Icon>
    <Weko-Icon icon="file"></Weko-Icon>
    <Weko-Icon icon="filter"></Weko-Icon>
    <Weko-Icon icon="gear"></Weko-Icon>
    <Weko-Icon icon="barcode"></Weko-Icon>
    <Weko-Icon icon="folder"></Weko-Icon>
    <Weko-Icon icon="folder-open"></Weko-Icon>
  </div>
  <h2 class="row-title">{{ $t('selectSize') }}</h2>
  <div class="row">
    <Weko-Icon icon="user-secret" size="2xs"></Weko-Icon>
    <Weko-Icon icon="bars" size="xs"></Weko-Icon>
    <Weko-Icon icon="shield-halved" size="sm"></Weko-Icon>
    <Weko-Icon icon="file" size="lg"></Weko-Icon>
    <Weko-Icon icon="filter" size="xl"></Weko-Icon>
    <Weko-Icon icon="gear" size="2x"></Weko-Icon>
    <Weko-Icon icon="barcode" size="3x"></Weko-Icon>
    <Weko-Icon icon="folder" size="4x"></Weko-Icon>
  </div>
  <h2 class="row-title">{{ $t('rotationAndFlip') }}</h2>
  <div class="row">
    <Weko-Icon icon="user-secret" rotation="90" size="xl"></Weko-Icon>
    <Weko-Icon icon="bars" rotation="270" size="xl"></Weko-Icon>
    <Weko-Icon icon="shield-halved" rotation="180" size="xl"></Weko-Icon>
    <Weko-Icon icon="file" flip="horizontal" size="xl"></Weko-Icon>
    <Weko-Icon icon="filter" flip="vertical" size="xl"></Weko-Icon>
    <Weko-Icon icon="folder-open" flip="both" size="xl"></Weko-Icon>
  </div>
  <h2 class="row-title">{{ $t('animation') }}</h2>
  <div class="row">
    <Weko-Icon icon="user-secret" size="xl" beat></Weko-Icon>
    <Weko-Icon icon="bars" size="xl" beat-fade></Weko-Icon>
    <Weko-Icon icon="shield-halved" size="xl" bounce></Weko-Icon>
    <Weko-Icon icon="file" size="xl" fade></Weko-Icon>
    <Weko-Icon icon="filter" size="xl" shake></Weko-Icon>
    <Weko-Icon icon="gear" size="xl" spin></Weko-Icon>
    <Weko-Icon icon="barcode" size="xl" spin-reverse></Weko-Icon>
    <Weko-Icon icon="folder" size="xl" spin-pluse></Weko-Icon>
    <Weko-Icon icon="folder-open" size="xl" beat></Weko-Icon>
  </div>
  <h2 class="row-title">{{ $t('custom') }}</h2>
  <div class="row">
    <Weko-Icon icon="user-secret" size="xl" type="primary"></Weko-Icon>
    <Weko-Icon icon="bars" size="xl" type="success"></Weko-Icon>
    <Weko-Icon icon="shield-halved" size="xl" type="info"></Weko-Icon>
    <Weko-Icon icon="file" size="xl" type="warning"></Weko-Icon>
    <Weko-Icon icon="filter" size="xl" type="danger"></Weko-Icon>
    <Weko-Icon icon="gear" size="xl" color="#e47412"></Weko-Icon>
    <Weko-Icon icon="barcode" size="xl" color="#7ec102"></Weko-Icon>
    <Weko-Icon icon="folder" size="xl" color="skyblue"></Weko-Icon>
    <Weko-Icon icon="folder-open" size="xl" color="rgba(122, 122, 122, 0.5)"></Weko-Icon>
  </div>
</template>

<script setup lang="js"></script>

<style scoped lang="scss"></style>
