<template>
  <div class="login">
    <div class="login-form">
      <div class="title">Vue-admin</div>
      <div class="form-content">
        <el-form ref="ruleFormRef" :model="ruleForm" status-icon :rules="rules">
          <el-form-item prop="userName">
            <el-input v-model="ruleForm.userName" autocomplete="off">
              <template #prefix>
                <el-icon><User /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="userPwd">
            <el-input
              v-model="ruleForm.userPwd"
              type="password"
              autocomplete="off"
            >
              <template #prefix>
                <el-icon><View /></el-icon>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" style="width: 100%" @click="handleLogin"
              >登录</el-button
            >
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { validatePass } from './validate'
import { View, User } from '@element-plus/icons-vue'
import { useStore } from 'vuex'

const store = useStore()

const ruleForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})

const rules = reactive({
  userName: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
  userPwd: [{ required: true, validator: validatePass, trigger: 'blur' }]
})

/**
 * 登录
 */
const ruleFormRef = ref()
function handleLogin() {
  ruleFormRef.value.validate((valid) => {
    if (valid) {
      store.dispatch('user/handleLogin', ruleForm)
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  background: url('https://t7.baidu.com/it/u=1603594547,1344795998&fm=193&f=GIF')
    no-repeat;
  background-size: 100% 100%;
  display: flex;
  justify-content: flex-end;
  .login-form {
    margin-top: 30px;
    margin-right: 300px;
    height: 230px;
    width: 400px;
    padding: 20px;
    background-color: rgba($color: #000000, $alpha: 0.2);
    border-radius: 5px;
    box-shadow: 0 0 10px 5px rgb(199 201 203 / 30%);
    .title {
      font-size: 30px;
      text-align: center;
      color: #fff;
      margin-bottom: 30px;
    }
  }
}
</style>
