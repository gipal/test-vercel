<!--
 * @Descripttion: your project
 * @Author: zhengzetao
 * @Date: 2025-08-18 11:26:22
-->
<template>
  <el-card style="max-width: 420px; margin: 40px auto">
    <h2>注册11</h2>
    <el-form :model="form" :rules="rules" ref="formRef" label-position="top">
      <el-form-item label="昵称" prop="name"><el-input v-model="form.name" /></el-form-item>
      <el-form-item label="Email" prop="email"><el-input v-model="form.email" /></el-form-item>
      <el-form-item label="密码" prop="password"><el-input v-model="form.password" type="password" /></el-form-item>
      <el-form-item>
        <el-button type="primary" :loading="loading" @click="onSubmit">注册</el-button>
        <el-button link @click="$router.push('/login')">去登录</el-button>
      </el-form-item>
    </el-form>
    <el-alert v-if="msg" type="success" :title="msg" show-icon closable style="margin-top: 8px" />
    <el-alert v-if="error" type="error" :title="error" show-icon closable style="margin-top: 8px" />
  </el-card>
</template>
<script setup>
import { reactive, ref } from "vue";
import api from "../api/axios";
const formRef = ref();
const loading = ref(false);
const error = ref("");
const msg = ref("");
const form = reactive({ name: "", email: "", password: "" });
const rules = {
  email: [{ required: true, message: "请输入 Email", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};
const onSubmit = async () => {
  error.value = "";
  msg.value = "";
  await formRef.value.validate(async (valid) => {
    if (!valid) return;
    loading.value = true;
    try {
      await api.post("/auth/register", form);
      msg.value = "注册成功，请前往登录";
    } catch (e) {
      error.value = e?.response?.data?.error || "注册失败";
    } finally {
      loading.value = false;
    }
  });
};
</script>
