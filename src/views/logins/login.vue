<template>
  <div class="login">
    <div id="login-main">
      <el-form
        ref="LoginFormRef"
        :model="LoginForm"
        status-icon
        :rules="Loginrules"
        class="demo-ruleForm"
      >
        <div class="title">火星</div>
        <el-form-item prop="userName">
          <el-input
            v-model="LoginForm.userName"
            type="test"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item prop="userPwd">
          <el-input
            v-model="LoginForm.userPwd"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-button type="primary" @click="handleUser(LoginFormRef)"
          >登录</el-button
        >
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
// import { login } from '../../api/user.js'
import { useStore } from 'vuex'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
// 路由
const router = useRouter()
// vuex
const store = useStore()
// 表单
const LoginForm = reactive({
  userName: 'admin',
  userPwd: '123456'
})
// ipt校验
const Loginrules = reactive({
  userName: {
    required: true,
    message: '请输入用户名',
    trigger: 'blur'
  },
  userPwd: {
    required: true,
    message: '请输入密码',
    trigger: 'blur'
  }
})
// form校验
const LoginFormRef = ref()
// 登录
const handleUser = async (elForm) => {
  await elForm.validate(async (valid, fields) => {
    if (valid) {
      try {
        store.dispatch('user/setLogin', LoginForm)
        router.push('/')
        ElMessage.success('登录成功')
      } catch (err) {}
    } else {
      console.log('error submit!', fields)
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: #f9fcff;
  display: flex;
  justify-content: center;
  align-items: center;
  #login-main {
    box-sizing: border-box;
    width: 500px;
    padding: 50px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 3px #c7c9cb4d;
  }
  .el-form {
    height: 237px;
    .el-input {
      width: 400px;
    }
    .el-button {
      width: 400px;
    }
  }
  .title {
    font-size: 50px;
    line-height: 1.5;
    text-align: center;
    margin-bottom: 30px;
  }
}
</style>
