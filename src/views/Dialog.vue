<template>
  <h2 class="row-title">{{ $t('dialogExample') }}</h2>
  <div class="row">
    <Weko-Button type="primary" @click="visible = true">
      {{ $t('firstDialog') }}
    </Weko-Button>
    <Weko-Button type="success" @click="visible2 = true">
      {{ $t('secondDialog') }}
    </Weko-Button>
    <Weko-Button type="info" @click="visible3 = true">
      {{ $t('thirdDialog') }}
    </Weko-Button>
  </div>
  <Weko-Dialog v-model:visible="visible" @close="visible = false">
    {{ $t('dialogText') }}
  </Weko-Dialog>
  <Weko-Dialog
    v-model:visible="visible2"
    @close="visible2 = false"
    :title="$t('dialogBasicName')"
    top="30vh"
    width="90%"
  >
    {{ $t('dialogText') }}
  </Weko-Dialog>
  <Weko-Dialog v-model:visible="visible3" @close="visible3 = false">
    {{ $t('dialogText') }}
    <template #footer>
      <Weko-Button type="danger" @click="visible3 = false">
        {{ $t('off') }}
      </Weko-Button>
      <Weko-Button type="warning" @click="visible3 = false">
        {{ $t('sure') }}
      </Weko-Button>
    </template>
  </Weko-Dialog>
</template>

<script setup lang="js">
import { ref } from 'vue';
const visible = ref(false);
const visible2 = ref(false);
const visible3 = ref(false);
</script>

<style scoped lang="scss"></style>
