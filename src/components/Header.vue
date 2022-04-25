<template>
  <a-layout-header class="header">
    <menu-unfold-outlined v-if="store.trigger" class="trigger" @click="() => (store.trigger = !store.trigger)"/>
    <menu-fold-outlined v-else class="trigger" @click="() => (store.trigger = !store.trigger)"/>
  </a-layout-header>
</template>

<script lang="ts" setup>
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons-vue';
import { useStore } from '../store'
import { onMounted } from 'vue';

const store = useStore()

onMounted(() => {

})
</script>

<style scoped lang="less">
.header {
  background: #fff;
  padding: 0;

  .module-corp-sel-list {
    height: 500px;
    box-sizing: border-box;
    overflow-y: auto;
    overflow-x: hidden;

    .module-corp-sel-list-item {
      box-sizing: content-box;
      height: 70px;
      line-height: 70px;
      margin-top: 12px;
      padding: 0 10px;
      background: #f2f2f6;
      border-radius: 8px;
      transition: all 0.3s;
      cursor: pointer;

      &:hover {
        transform: translateX(3px);
      }

      .module-corp-sel-list-item-avatar {
        width: 50px;
        height: 50px;
        line-height: 50px;
        border-radius: 5px;
      }

      .module-corp-sel-list-title {
        font-size: 16px;
        padding: 0 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .trigger {
    font-size: 18px;
    line-height: 64px;
    padding: 0 24px;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
      color: #1890ff;
    }
  }
}
</style>