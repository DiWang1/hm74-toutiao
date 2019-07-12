<template>
  <div class="login-container">
    <el-card class="login-box">
      <img src="../../assets/images/logo_index.png" alt />
      <!-- 这是登录页的表单 :status-icon="true" 组件用来显示表单验证之后的小X-->
      <el-form ref="formlogin" :model="loginform" :rules="loginrules" :status-icon="true">
        <el-form-item prop="mobile">
          <!-- 手机号的输入框  :rules="rules"这个属性用来限制登陆框的非空以及基本样式规范 -->
          <el-input v-model="loginform.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginform.code" placeholder="请输入验证码" class="formcode"></el-input>
          <el-button style="float:right">获取验证</el-button>
        </el-form-item>
        <el-form-item>
          <el-checkbox v-model="checked">
            <span>我已阅读并同意</span>
            <el-button type="text">用户协议</el-button>
            <span>以及</span>
            <el-button type="text">隐私条款</el-button>
          </el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="loginbtn" @click="login()">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    // 校验手机号格式
    var checkMobile = (rule, value, callback) => {
      if (/^1[3-9]\d{9}$/.test(value)) {
        callback()
      } else {
        callback(new Error('您输入的手机号格式有误'))
      }
    }
    return {
      checked: true,
      // 表单数据对象
      loginform: {
        mobile: '',
        code: ''
      },
      // 表单验证规则对象  loginform当中有几个数据下边就会有几种校验规则,检验名一般和表单的数据名保持一致,具体的校验规则是个数组,数组中间是对象
      loginrules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { validator: checkMobile, trigger: 'blur' }
        ],
        code: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { len: 6, message: '请输入六位数字', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$refs.formlogin.validate((valid) => {
        if (valid) {
          // 发送axios向后台提交数据
          this.$http.post('http://ttapi.research.itcast.cn/mp/v1_0/authorizations', this.loginform)
            .then((res) => {
            // 做了什么事情console.log(res.data)
            // 1.跳转到首页
            // 2.TODO 保存用户信息来判断登录状态
            // 使用链式编程push的方法跳转
              this.$router.push('/')
            })
            .catch(() => {
              // 报错提示
              this.$message.error('用户验证失败')
            })
        }
      })
    }
  }
}

</script>

<style scoped lang='less'>
.login-container {
  background: url("../../assets/images/login_bg.jpg") no-repeat center/cover;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  .login-box {
    height: 330px;
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    img {
      display: block;
      width: 200px;
      margin: 10px auto;
    }
    span {
      color: black;
    }
    .formcode {
      width: 248px;
    }
    .loginbtn {
      width: 100%;
    }
  }
}
</style>
