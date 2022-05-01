<template>
  <a-layout-sider class="aside" :collapsed="store.trigger" :trigger="null" collapsible>
    <div class="logo"/>
    <a-menu :selectedKeys="store.selected" theme="dark" mode="inline">
      <a-menu-item key="employee" @click="to('employee')">
        <HomeOutlined/>
        <span>员工列表</span>
      </a-menu-item>
      <a-menu-item key="field" @click="to('field')">
        <HomeOutlined/>
        <span>字段列表</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
import { DingdingOutlined, HomeOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { useRouter } from 'vue-router'
import { useStore } from '../store'

const store = useStore()
const router = useRouter()
// 路由跳转
const to = (path: string) => {
  router.push({name: path})
}
</script>

<style scoped lang="less">
.aside {
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
  }
}
</style>