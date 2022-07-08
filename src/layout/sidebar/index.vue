<template>
  <h3>Manager</h3>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
    router
  >
    <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>系统管理</span>
      </template>
      <el-menu-item index="/system/user">用户管理</el-menu-item>
      <el-menu-item index="/system/menu">菜单管理</el-menu-item>
      <el-menu-item index="/system/role">角色管理</el-menu-item>
      <el-menu-item index="/system/dept">部门管理</el-menu-item>
    </el-sub-menu>
    <el-sub-menu index="2">
      <template #title>
        <el-icon><location /></el-icon>
        <span>审批管理</span>
      </template>
      <el-menu-item index="/audit/leave">休假申请</el-menu-item>
      <el-menu-item index="2-2">待审批</el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
console.log(router.getRoutes())
</script>

<style lang="scss" scoped>
h3 {
  font-size: 20px;
  text-align: center;
  background-color: #545c64;
  height: 50px;
  line-height: 50px;
  color: #f6f6f6;
}
.el-menu {
  height: calc(100% - 50px);
  .el-sub-menu {
    margin-right: none;
  }
}
</style>
