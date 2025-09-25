<!--
 * @Descripttion: your project
 * @Author: zhengzetao
 * @Date: 2025-08-18 11:26:22
-->
<template>
  <el-card>
    <template #header>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <span>仪表盘（受保护页面）</span>
        <el-button @click="refresh" :loading="loading">刷新资料</el-button>
      </div>
    </template>
    <div v-if="user">
      <p><b>Email：</b>{{ user.email }}</p>
      <p><b>昵称：</b>{{ user.name || '(未设置)' }}</p>
      <p><b>角色：</b>{{ user.role }}</p>
    </div>
    <el-alert v-else type="warning" title="尚未获取到用户资料" show-icon />
  </el-card>
</template>
<script setup>
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useAuthStore } from '../stores/auth'
const auth = useAuthStore()
const { user } = storeToRefs(auth)
const loading = ref(false)
async function refresh() { loading.value = true; try { await auth.fetchProfile() } finally { loading.value = false } }
onMounted(refresh)
</script>
