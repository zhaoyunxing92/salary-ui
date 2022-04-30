<template>
  <a-layout-sider class="aside" :collapsed="store.trigger" :trigger="null" collapsible>
    <div class="logo"/>
    <a-menu :openKeys="store.opened" :selectedKeys="store.selected" theme="dark" mode="inline">
      <a-menu-item key="dashboard" @click="to('dashboard')">
        <HomeOutlined/>
        <span>首页</span>
      </a-menu-item>
      <a-sub-menu key="salary">
        <template #icon>
          <SettingOutlined/>
        </template>
        <template #title>薪资组</template>
        <a-menu-item key="salary-group" @click="to('salary-group')">
          <DingdingOutlined/>
          <span>列表</span>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="field">
        <template #icon>
          <SettingOutlined/>
        </template>
        <template #title>字段管理</template>
        <a-menu-item key="field-list" @click="to('field-list')">
          <DingdingOutlined/>
          <span>字段列表</span>
        </a-menu-item>
      </a-sub-menu>
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