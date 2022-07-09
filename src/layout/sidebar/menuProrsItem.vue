<template>
  <template v-if="props.data.children && props.data.children.length === 3">
    <el-sub-menu :index="props.data.path">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ props.data.meta.title }}</span>
      </template>
      <div v-for="item in props.data.children" :key="item">
        <el-menu-item :index="item.path">
          {{ item.meta.title }}
        </el-menu-item>
      </div>
    </el-sub-menu>
  </template>
  <template v-else-if="props.data.children && props.data.children.length === 2">
    <el-sub-menu :index="props.data.path">
      <template #title>
        <el-icon><location /></el-icon>
        <span>{{ props.data.meta.title }}</span>
      </template>
      <div v-for="item in props.data.children" :key="item">
        <el-menu-item :index="item.path">
          {{ item.meta.title }}
        </el-menu-item>
      </div>
    </el-sub-menu>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
  data: { type: Object, default: () => {} }
})
// console.log(props.data)
console.log(props.data.children)
</script>

<style lang="scss" scoped></style>
