<template>
  <a-layout class="app-main">
    <Aside/>
    <a-layout>
      <Header/>
      <a-layout-content class="content">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts" setup>
import Aside from '../components/Aside.vue';
import Header from '../components/Header.vue';
</script>

<style scoped lang="less">
.app-main {
  height: 100vh;

  .content {
    margin: 24px 16px;
    padding: 24px 24px;
    background: #fff;
    overflow: auto;
  }
}
</style>