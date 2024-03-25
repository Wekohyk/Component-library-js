<template>
  <div>
    <h1 class="title">{{ $t('weko') }}</h1>
    <nav class="nav">
      <router-link to="/">Icon</router-link>
      <router-link to="/button">Button</router-link>
      <router-link to="/card">Card</router-link>
      <router-link to="/dialog">Dialog</router-link>
      <router-link to="/pager">Pager</router-link>
      <router-link to="/collapse">Collapse</router-link>
      <router-link to="/tooltip">Tooltip</router-link>
      <router-link to="/dropdown">Dropdown</router-link>
    </nav>
    <div class="displayArea">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="js"></script>

<style scoped lang="scss">
.title {
  text-align: center;
  font-weight: bold;
}
.nav {
  display: flex;
  height: 50px;
  justify-content: space-evenly;
  align-items: center;
}

.displayArea {
  margin-top: 2em;
}
.active {
  border-bottom: 3px solid hsla(160, 100%, 37%, 1);
}
</style>
