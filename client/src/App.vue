<!--
 * @Descripttion: your project
 * @Author: zhengzetao
 * @Date: 2025-08-18 11:26:22
-->

<template>
  <el-container style="height:100vh">
    <el-header>
      <div style="display:flex;justify-content:space-between;align-items:center;">
        <strong>自动化</strong>
        <!-- <strong>Vue3 + Element Plus + JWT</strong> -->
        <div>
          <el-button v-if="!isAuthed" type="primary" @click="$router.push('/login')">登录</el-button>
          <el-button v-if="!isAuthed" @click="$router.push('/register')">注册</el-button>
          <el-dropdown v-else>
            <span class="el-dropdown-link">{{ user?.email }}</span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item @click="$router.push('/dashboard')">仪表盘</el-dropdown-item>
                <el-dropdown-item divided @click="logout">退出</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-header>
    <el-main><router-view /></el-main>
  </el-container>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useAuthStore } from './stores/auth'
const auth = useAuthStore(); const { isAuthed, user } = storeToRefs(auth); const logout=()=>auth.logout()
</script>
