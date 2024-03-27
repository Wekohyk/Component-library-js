<template>
  <h2 class="row-title">{{ $t('normalImport') }}</h2>
  <div class="row">
    <Icon icon="user-secret"></Icon>
    <Icon icon="bars"></Icon>
    <Icon icon="shield-halved"></Icon>
    <Icon icon="file"></Icon>
    <Icon icon="filter"></Icon>
    <Icon icon="gear"></Icon>
    <Icon icon="barcode"></Icon>
    <Icon icon="folder"></Icon>
    <Icon icon="folder-open"></Icon>
  </div>
  <h2 class="row-title">{{ $t('selectSize') }}</h2>
  <div class="row">
    <Icon icon="user-secret" size="2xs"></Icon>
    <Icon icon="bars" size="xs"></Icon>
    <Icon icon="shield-halved" size="sm"></Icon>
    <Icon icon="file" size="lg"></Icon>
    <Icon icon="filter" size="xl"></Icon>
    <Icon icon="gear" size="2x"></Icon>
    <Icon icon="barcode" size="3x"></Icon>
    <Icon icon="folder" size="4x"></Icon>
  </div>
  <h2 class="row-title">{{ $t('rotationAndFlip') }}</h2>
  <div class="row">
    <Icon icon="user-secret" rotation="90" size="xl"></Icon>
    <Icon icon="bars" rotation="270" size="xl"></Icon>
    <Icon icon="shield-halved" rotation="180" size="xl"></Icon>
    <Icon icon="file" flip="horizontal" size="xl"></Icon>
    <Icon icon="filter" flip="vertical" size="xl"></Icon>
    <Icon icon="folder-open" flip="both" size="xl"></Icon>
  </div>
  <h2 class="row-title">{{ $t('animation') }}</h2>
  <div class="row">
    <Icon icon="user-secret" size="xl" beat></Icon>
    <Icon icon="bars" size="xl" beat-fade></Icon>
    <Icon icon="shield-halved" size="xl" bounce></Icon>
    <Icon icon="file" size="xl" fade></Icon>
    <Icon icon="filter" size="xl" shake></Icon>
    <Icon icon="gear" size="xl" spin></Icon>
    <Icon icon="barcode" size="xl" spin-reverse></Icon>
    <Icon icon="folder" size="xl" spin-pluse></Icon>
    <Icon icon="folder-open" size="xl" beat></Icon>
  </div>
  <h2 class="row-title">{{ $t('custom') }}</h2>
  <div class="row">
    <Icon icon="user-secret" size="xl" type="primary"></Icon>
    <Icon icon="bars" size="xl" type="success"></Icon>
    <Icon icon="shield-halved" size="xl" type="info"></Icon>
    <Icon icon="file" size="xl" type="warning"></Icon>
    <Icon icon="filter" size="xl" type="danger"></Icon>
  </div>
</template>

<script setup lang="js"></script>

<style scoped lang="scss"></style>
