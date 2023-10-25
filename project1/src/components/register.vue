<template>
  <img class="asd" src="/wallhaven-4orvr9_1920x1080.png">
    <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>注册页</span>
            <el-button class="button" text @click="$router.push('/login')">登录</el-button>
          </div>
        </template>
        <div v-for="o in 1" :key="o" class="text item">{{ '欢迎加入姚佳宇大富翁' }}</div>
        <el-form
        ref="ruleFormRef"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="120px"
        class="demo-ruleForm"
      >
        <el-form-item label="输入账号" prop="">
          <el-input v-model="ruleForm.id" placeholder="Please input" />
        </el-form-item>
        <el-form-item label="输入密码" prop="pass">
          <el-input v-model="ruleForm.pass" type="password" autocomplete="off" />
        </el-form-item>
        <el-form-item label="重复密码" prop="checkPass">
          <el-input
            v-model="ruleForm.checkPass"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label="年龄" prop="age">
          <el-input v-model.number="ruleForm.age" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm(ruleFormRef)"
            >提交注册</el-button
          >
          <el-button @click="resetForm(ruleFormRef)">重置</el-button>
        </el-form-item>
      </el-form>
      </el-card>
   
  </template>
  
  <script lang="ts" setup>
  import { reactive, ref } from 'vue'

  import type { FormInstance, FormRules } from 'element-plus'
import router from '../router';
  
  const input = ref('')

  const ruleFormRef = ref<FormInstance>()
  
  const checkAge = (rule: any, value: any, callback: any) => {
    if (!value) {
      return callback(new Error('请输入年龄'))
    }
    setTimeout(() => {
      if (!Number.isInteger(value)) {
        callback(new Error('请输入数字'))
      } else {
        if (value < 18) {
          callback(new Error('未满18不得入内'))
        } else {
          callback()
        }
      }
    }, 1000)
  }
  
  const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请输入密码'))
    } else {
      if (ruleForm.checkPass !== '') {
        if (!ruleFormRef.value) return
        ruleFormRef.value.validateField('checkPass', () => null)
      }
      callback()
    }
  }
  const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
      callback(new Error('请再一次输入密码'))
    } else if (value !== ruleForm.pass) {
      callback(new Error("两次密码不匹配"))
    } else {
      callback()
    }
  }
  
  const ruleForm = reactive({
    pass: '',
    checkPass: '',
    age: '',
    id:'',
  })
  
  const rules = reactive<FormRules<typeof ruleForm>>({
    pass: [{ validator: validatePass, trigger: 'blur' }],
    checkPass: [{ validator: validatePass2, trigger: 'blur' }],
    age: [{ validator: checkAge, trigger: 'blur' }],
  })
  
  const submitForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.validate((valid) => {
      if (valid) {
        console.log('submit!')
        //打印信息 
        console.log(ruleForm.age)
        console.log(ruleForm.id)
        console.log(ruleForm.pass)
        //先进行跳转
        router.push("/leader/yajay")
        
      } else {
        console.log('error submit!')
        return false
      }
    })
  }
  
  const resetForm = (formEl: FormInstance | undefined) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>

  <style scoped>
  .asd{
    position:fixed;
    top:0;
    width: 100%;
    left: 0;
    z-index: -99;
  }
  </style>
  