<template>
  <h2 class="row-title">{{ $t('defaultShow') }}</h2>
  <div class="row">
    <Weko-Button>{{ $t('defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary">{{ $t('primaryBtn') }}</Weko-Button>
    <Weko-Button type="info">{{ $t('messageBtn') }}</Weko-Button>
    <Weko-Button type="success">{{ $t('successBtn') }}</Weko-Button>
    <Weko-Button type="warning">{{ $t('warningBtn') }}</Weko-Button>
    <Weko-Button type="danger">{{ $t('dangerBtn') }}</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('simplicityBtn') }}</h2>
  <div class="row">
    <Weko-Button plain>{{ $t('defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" plain>{{ $t('primaryBtn') }}</Weko-Button>
    <Weko-Button type="info" plain>{{ $t('messageBtn') }}</Weko-Button>
    <Weko-Button type="success" plain>{{ $t('successBtn') }}</Weko-Button>
    <Weko-Button type="warning" plain>{{ $t('warningBtn') }}</Weko-Button>
    <Weko-Button type="danger" plain>{{ $t('dangerBtn') }}</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('radiusBtn') }}</h2>
  <div class="row">
    <Weko-Button round>{{ $t('defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" round>{{ $t('primaryBtn') }}</Weko-Button>
    <Weko-Button type="info" round>{{ $t('messageBtn') }}</Weko-Button>
    <Weko-Button type="success" plain round>{{ $t('successBtn') }}</Weko-Button>
    <Weko-Button type="warning" plain round>{{ $t('warningBtn') }}</Weko-Button>
    <Weko-Button type="danger" plain round>{{ $t('dangerBtn') }}</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('disabled') }}</h2>
  <div class="row">
    <Weko-Button disabled>{{ $t('defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" disabled>{{ $t('primaryBtn') }}</Weko-Button>
    <Weko-Button type="info" disabled>{{ $t('messageBtn') }}</Weko-Button>
    <Weko-Button type="success" disabled>{{ $t('successBtn') }}</Weko-Button>
    <Weko-Button type="warning" disabled>{{ $t('warningBtn') }}</Weko-Button>
    <Weko-Button type="danger" disabled>{{ $t('dangerBtn') }}</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('await') }}</h2>
  <div class="row">
    <Weko-Button loading>{{ $t('defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" loading>{{ $t('primaryBtn') }}</Weko-Button>
    <Weko-Button type="info" loading>{{ $t('messageBtn') }}</Weko-Button>
    <Weko-Button type="success" loading round>
      {{ $t('successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" loading round>
      {{ $t('warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" loading round>{{ $t('dangerBtn') }}</Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('iconBtn') }}</h2>
  <div class="row">
    <Weko-Button icon="file">{{ $t('defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" icon="gear">{{ $t('primaryBtn') }}</Weko-Button>
    <Weko-Button type="info" icon="folder" plain>
      {{ $t('messageBtn') }}
    </Weko-Button>
    <Weko-Button type="success" icon="bug" plain>
      {{ $t('successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" icon="code" round>
      {{ $t('warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" icon="cube" round>
      {{ $t('dangerBtn') }}
    </Weko-Button>
  </div>
  <h2 class="row-title">{{ $t('differentSizeBtn') }}</h2>
  <div class="row">
    <Weko-Button icon="file" size="small">{{ $t('defaultBtn') }}</Weko-Button>
    <Weko-Button type="primary" icon="gear" size="small">
      {{ $t('primaryBtn') }}
    </Weko-Button>
    <Weko-Button type="info" icon="folder" plain>
      {{ $t('messageBtn') }}
    </Weko-Button>
    <Weko-Button type="success" icon="bug" plain>
      {{ $t('successBtn') }}
    </Weko-Button>
    <Weko-Button type="warning" icon="code" plain size="large">
      {{ $t('warningBtn') }}
    </Weko-Button>
    <Weko-Button type="danger" icon="cube" plain size="large">
      {{ $t('dangerBtn') }}
    </Weko-Button>
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
    <Weko-Button type="primary" @click="clickHandler" ref="btnRef">
      {{ $t('primaryBtn') }}
    </Weko-Button>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
const btnRef = ref(null);

const clickHandler = () => {
  window.alert('button click');
  console.log(btnRef.value.ref);
};
</script>

<style scoped lang="scss"></style>
