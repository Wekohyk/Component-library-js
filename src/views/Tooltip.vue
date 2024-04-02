<template>
  <h2 class="row-title">{{ $t('differentDirections') }}</h2>
  <div class="row">
    <div class="row">
      <Weko-Tooltip
        content="this is a test"
        placement="top"
        @visible-change="handle"
      >
        <Weko-Button type="primary">top</Weko-Button>
      </Weko-Tooltip>
      <Weko-Tooltip content="this is a test" placement="bottom">
        <Weko-Button type="warning">bottom</Weko-Button>
      </Weko-Tooltip>
      <Weko-Tooltip content="this is a test" placement="left">
        <Weko-Button type="danger">left</Weko-Button>
      </Weko-Tooltip>
      <Weko-Tooltip content="this is a test" placement="right">
        <Weko-Button type="success">right</Weko-Button>
      </Weko-Tooltip>
    </div>
  </div>

  <h2 class="row-title">{{ $t('switchTrigger') }}</h2>
  <div class="row">
    <div class="row">
      <Weko-Tooltip content="this is a test" placement="top" trigger="click">
        <Weko-Button type="primary">top</Weko-Button>
      </Weko-Tooltip>
      <Weko-Tooltip content="this is a test" placement="bottom" trigger="click">
        <Weko-Button type="warning">bottom</Weko-Button>
      </Weko-Tooltip>
      <Weko-Tooltip content="this is a test" placement="left" trigger="click">
        <Weko-Button type="danger">left</Weko-Button>
      </Weko-Tooltip>
      <Weko-Tooltip content="this is a test" placement="right" trigger="click">
        <Weko-Button type="success">right</Weko-Button>
      </Weko-Tooltip>
    </div>
  </div>

  <h2 class="row title">{{ $t('手动触发模式') }}</h2>
  <div class="row">
    <Weko-Tooltip
      content="this is a test"
      placement="right"
      manual
      ref="tooltipRef"
    >
      <Weko-Button type="primary">right</Weko-Button>
    </Weko-Tooltip>
  </div>
  <div class="row">
    <Weko-Button @click="openHandler">{{ $t('openPrompt') }}</Weko-Button>
    <Weko-Button @click="closeHandler">{{ $t('closePrompt') }}</Weko-Button>
  </div>

  <h2 class="row-title">{{ $t('delayedTrigger') }}</h2>
  <div class="row">
    <Weko-Tooltip
      content="this is a test"
      placement="top"
      :open-delay="2000"
      :close-delay="2000"
      @visible-change="handle"
    >
      <Weko-Button type="primary">top</Weko-Button>
    </Weko-Tooltip>
    <Weko-Tooltip
      content="this is a test"
      placement="bottom"
      :open-delay="2000"
      :close-delay="2000"
    >
      <Weko-Button type="warning">bottom</Weko-Button>
    </Weko-Tooltip>
    <Weko-Tooltip
      content="this is a test"
      placement="left"
      :open-delay="2000"
      :close-delay="2000"
    >
      <Weko-Button type="danger">left</Weko-Button>
    </Weko-Tooltip>
    <Weko-Tooltip
      content="this is a test"
      placement="right"
      :open-delay="2000"
      :close-delay="2000"
    >
      <Weko-Button type="success">right</Weko-Button>
    </Weko-Tooltip>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
const handle = isShow => {
  console.log(isShow);
};

const tooltipRef = ref(null);

const openHandler = () => {
  tooltipRef.value?.show();
};
const closeHandler = () => {
  tooltipRef.value?.hidden();
};
</script>

<style scoped lang="scss"></style>
