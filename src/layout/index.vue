<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><Sidebar></Sidebar></el-aside>
      <el-container>
        <el-header> <Appheader></Appheader></el-header>
        <el-main> <Appmain></Appmain></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Appheader from './appheader/index.vue'
import Appmain from './appmain/index.vue'
import Sidebar from './sidebar/index.vue'
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100%;
  height: 100%;
  .el-container {
    width: 100%;
    height: 100%;
  }
  .el-aside {
    height: 100%;
    // background-color: red;
  }
  .el-header {
    height: 55px;
    // background-color: skyblue;
  }
  .el-main {
    height: calc(100hv - 55px);
    // background-color: #f6f6f6;
  }
}
</style>
