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
      <div class="login_btn">
        <button :disabled="isClick" @click="handleLogin">登录</button>
      </div>
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
      error: {
        phone: "",
      },
      disabled: false,
      btnTitle: "获取验证码",
    };
  },
  computed: {
    isClick() {
      if (!this.phone || !this.verifyCode) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // 验证码判断
    getVerifyCode() {
      let regexp = /^(13[0-9]|14[01456879]|15[0-35-9]|16[2567]|17[0-8]|18[0-9]|19[0-35-9])\d{8}$/;
      if (!this.phone) {
        this.error.phone = "手机号码不能为空";
      } else if (!regexp.test(this.phone)) {
        this.error.phone = "请填写正确的手机号码";
      } else {
        // 获取验证码
        this.error.phone = "";
        this.validateBtn();
        // 发送网络请求
        // this.$axios
        //   .post("/api/posts/sms_send", {
        //     tpl_id: "234057",
        //     key: "5c9b59ad0a4bb6235a0dd2c493dba80e",
        //     phone: this.phone,
        //   })
        //   .then((res) => {
        //     console.log(res);
        //   });
      }
    },
    // 获取验证码倒计时
    validateBtn() {
      let time = 60;
      let timer = setInterval(() => {
        if (time == 0) {
          this.disabled = false;
          this.btnTitle = "获取验证码";
          clearInterval(timer);
        } else {
          this.disabled = true;
          this.btnTitle = time + "秒后重试";
          time--;
        }
      }, 1000);
    },
    // 登录按钮
    handleLogin() {
      // 取消错误提醒
      this.error = {};
      // 接口更新 直接模拟登录成功 存入localstorage
      localStorage.setItem("ele_login", true);
      this.$router.push("/");
      // 发送请求
      // this.$axios
      //   .post("/api/posts/sms_back", {
      //     phone: this.phone,
      //     code: this.verifyCode,
      //   })
      //   .then((res) => {
      //     console.log(res);
      //     // 检验成功,设置登录信息,并且进行页面跳转
      //     localStorage.setItem("ele_login", true);
      //     this.$router.push("/");
      //   })
      //   .catch((err) => {
      //     //返回错误信息
      //     this.error = {
      //       code: err.response.data.msg,
      //     };
      //   });
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
.login_btn button[disabled] {
  background: #8bda81;
}
</style>