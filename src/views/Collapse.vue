<template>
  <h2 class="row-title">折叠面板</h2>
  <div class="row">
    <Weko-Collapse v-model="openedValue" @change="changeHandle">
      <Weko-CollapseItem name="a" title="home">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, non.
      </Weko-CollapseItem>
      <Weko-CollapseItem name="b" title="about">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, ducimus.
      </Weko-CollapseItem>
      <Weko-CollapseItem name="c" title="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
      </Weko-CollapseItem>
      <Weko-CollapseItem name="d" title="contact" disabled>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
      </Weko-CollapseItem>
    </Weko-Collapse>
  </div>
  <h2 class="row-title">手风琴模式</h2>
  <div class="row">
    <Weko-Collapse v-model="openedValue2" @change="changeHandle" accordion>
      <Weko-CollapseItem name="a" title="home">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, non.
      </Weko-CollapseItem>
      <Weko-CollapseItem name="b" title="about">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet, ducimus.
      </Weko-CollapseItem>
      <Weko-CollapseItem name="c" title="content">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem,
      </Weko-CollapseItem>
      <Weko-CollapseItem name="d" title="contact">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
      </Weko-CollapseItem>
    </Weko-Collapse>
  </div>
  <h2 class="row-title">自定义标题</h2>
  <div class="row">
    <Weko-Collapse v-model="openedValue3" accordion>
      <Weko-CollapseItem name="Consistency" title="Consistency">
        <template #title>
          <div class="titleContainer">
            <span class="title">Consistency</span>
            <Weko-Icon icon="house" />
          </div>
        </template>
        <div>
          Consistent with real life: in line with the process and logic of real
        </div>
        <div>
          Consistent within interface: all elements should be consistent, such
        </div>
      </Weko-CollapseItem>
      <Weko-CollapseItem name="Feedback">
        <template #title>
          <div class="titleContainer">
            <span class="title">Feedback</span>
            <Weko-Icon icon="image" />
          </div>
        </template>
        <div>operations by style updates and interactive effects;</div>
        <div>
          Visual feedback: reflect current state by updating or rearranging
        </div>
      </Weko-CollapseItem>
      <Weko-CollapseItem name="Efficiency">
        <template #title>
          <div class="titleContainer">
            <Weko-Icon icon="phone" />
            <span class="title">Efficiency</span>
          </div>
        </template>
        <div>
          Simplify the process: keep operating process simple and intuitive;
        </div>
        <div>
          Definite and clear: enunciate your intentions clearly so that the
        </div>
        <div>
          the users to identify and frees them from memorizing and recalling.
        </div>
      </Weko-CollapseItem>
      <Weko-CollapseItem name="Controllability" title="Controllability">
        <template #title>
          <div class="titleContainer">
            <Weko-Icon icon="star" />
            <span class="title">Controllability</span>
          </div>
        </template>
        <div>
          Decision making: giving advices about operations is acceptable, but do
        </div>
        <div>
          Controlled consequences: users should be granted the freedom to
        </div>
      </Weko-CollapseItem>
    </Weko-Collapse>
  </div>
</template>

<script setup lang="js">
import { ref } from 'vue';
// 默认打开数量
const openedValue = ref(['a', 'b']);
const openedValue2 = ref(['b']);
const openedValue3 = ref([]);

const changeHandle = arr => {
  console.log(arr);
};
</script>

<style scoped lang="scss">
.titleContainer {
  display: flex;
}
.title {
  margin: 0 5px;
}
</style>
