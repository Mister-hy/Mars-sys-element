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
    <MenuProrsItem v-for="item in menuList" :key="item" :data="item"></MenuProrsItem>
  </el-menu>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { getParenRouter, getMenus } from '../../utils/menu.js'
import MenuProrsItem from './menuProrsItem.vue'
const router = useRouter()

const menuList = getMenus(getParenRouter(router.getRoutes()))
// console.log(menuList)
// console.log(getMenus(getParenRouter(router.getRoutes())))
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
