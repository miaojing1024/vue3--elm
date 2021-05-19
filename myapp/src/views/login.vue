<template>
  <div class="login">
    <div class="logo">
      <img src="../assets/imgs.jpg" class="logo" alt="my login img" />
      <!-- 手机号 -->
      <InputGroup
        type="number"
        v-model="phone"
        placeholder="手机号"
        :btnTitle="btnTitle"
        :disabled="disabled"
        :error="error.phone"
        @btnClick="getVerifyCode"
      />
      <!-- 验证码 -->
      <InputGroup
        type="number"
        v-model="verifyCode"
        placeholder="验证码"
        :error="error.verifyCode"
      />
      <!-- 用户服务协议 -->
      <div class="login_des">
        <p>
          新用户登录即自动注册,表示已同意
          <span>用户服务协议</span>
        </p>
      </div>
      <!-- 登录按钮 -->
      <div class="login_btn"><button>登录</button></div>
    </div>
  </div>
</template>
<script>
import InputGroup from "../components/InputGroup";
export default {
  name: "login",
  components: {
    InputGroup,
  },
  data() {
    return {
      phone: "",
      verifyCode: "",
      error: {},
      disabled: false,
      btnTitle: "获取验证码",
    };
  },
  methods: {
    getVerifyCode() {
      let regexp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!this.phone) {
        this.error = {
          phone: "手机号码不能为空",
        };
        // this.error.phone = "请输入手机号码";
        console.log(this.error.phone);
      } else if (!regexp.test(this.phone)) {
        this.error.phone = "请输入正确的手机号码";
        console.log(this.error.phone);
      } else {
        // 获取验证码
        this.error = {}
        console.log('获取验证码');
      }
    },
  },
};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  padding: 30px;
  box-sizing: border-box;
  background: #fff;
}

.login .logo {
  text-align: center;
}
.logo img {
  width: 150px;
}

.text_group,
.login_des,
.login_btn {
  margin-top: 20px;
}
.login_des span {
  color: #4d90fe;
}
.login_btn button {
  width: 100%;
  height: 40px;
  background: #48ca38;
  border-radius: 4px;
  color: white;
  font-size: 14px;
  border: none;
  outline: none;
}
</style>