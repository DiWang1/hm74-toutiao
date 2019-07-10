<template>
  <div class='login-container'>
    <el-card class="login-box">
        <img src="../../assets/images/logo_index.png" alt="">
        <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
        <el-input v-model="input" placeholder="请输入内容" class='verification-code'></el-input>
        <el-button>发送验证码</el-button>
         <el-checkbox v-model="checked">我已经阅读并同意<el-button type="text">用户协议</el-button>和<el-button type="text">隐私条款</el-button></el-checkbox>
         <el-button type="primary" class="login-btn">登录</el-button>
    </el-card>
   </div>
</template>

<script>
export default {}
</script>

<style scoped lang='less'>
 .login-container{
     background: url('../../assets/images/login_bg.jpg')no-repeat center/cover;
     width: 100%;
     height: 100%;
     position: absolute;
     left: 0;
     top: 0;
     .login-box{
         height: 300px;
         width: 400px;
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%,-50%);
         img{
             display: block;
             width: 200px;
             margin: 10px auto;
         }
         .verification-code{
             width: 238px;
             margin: 20px 10px 10px 0px;
         }
         .login-btn{
             width: 360px;
             margin: 10px auto;
         }
     }
 }
</style>
