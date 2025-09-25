
<template>
  <el-card style="max-width:420px;margin:40px auto;">
    <h2>登录</h2>
    <el-form :model="form" :rules="rules" ref="formRef" label-position="top">
      <el-form-item label="Email" prop="email"><el-input v-model="form.email" /></el-form-item>
      <el-form-item label="密码" prop="password"><el-input v-model="form.password" type="password" /></el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="onSubmit">登录</el-button>
        <el-button link @click="$router.push('/register')">去注册</el-button>
      </el-form-item>
    </el-form>
    <el-alert v-if="error" type="error" :title="error" show-icon closable style="margin-top:8px;" />
  </el-card>
</template>
<script setup>
import { reactive, ref } from 'vue'
import { useAuthStore } from '../stores/auth'
const auth = useAuthStore()
const formRef = ref(); const loading = ref(false); const error = ref('')
const form = reactive({ email:'', password:'' })
const rules = { email:[{required:true,message:'请输入 Email',trigger:'blur'}], password:[{required:true,message:'请输入密码',trigger:'blur'}] }
const onSubmit = async () => {
  error.value=''
  await formRef.value.validate(async (valid)=>{
    if(!valid) return
    loading.value=true
    try{ await auth.login(form.email, form.password); window.location.href='/dashboard' }
    catch(e){ error.value = e?.response?.data?.error || '登录失败' }
    finally{ loading.value=false }
  })
}
</script>
