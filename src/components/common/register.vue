<template>
  <!-- 用户注册界面 -->
  <div class="register">
    <div class="container">
      <div class="register-box">
        <div class="logo-img">
          <img src="@/assets/images/logo.png" alt>
        </div>
        <div class="title">东坡区旅游平台注册</div>
        <div class="phone-number">
          <input type="text" placeholder="请输入手机号码" ref="phonenumber">
        </div>
        <div v-show="hint" ref="hintphone" class="hint-phone"></div>
        <div class="auth-code">
          <input type="text" placeholder="请输入验证码">
        </div>
        <div v-show="hint" ref="hintauth" class="hint-auth"></div>
        <div class="auth-submit" @click="getauthcode">获得验证码</div>
        <div class="new-password">
          <input type="password" placeholder="请输入新密码">
        </div>
        <div class="renew-password">
          <input type="password" placeholder="请再次输入新密码">
        </div>
        <div v-show="hint" ref="hintpassword" class="hintpassword"></div>
        <!-- <router-link to="/scenicregister"> -->
        <!-- 跳转到景区注册界面 -->
        <div class="register-submit1">注册景区</div>
        <!-- </router-link> -->
        <!-- <router-link to="/secondregister"> -->
        <!-- 跳转到二级监管平台注册界面 -->
        <div class="register-submit2">注册二级监管</div>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "register",
  data() {},
  methods:{

  },
  beforeDestroy() {
    document.body.style.background = "";
  },
  mounted() {
    document.body.style.background = "#4cc6dc";
  }
};
</script>
<style lang="" scoped>
.register {
  position: fixed;
  top: 0;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-image: url("../../assets/images/background-image.jpg");
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
.container {
  height: 100%;
  box-sizing: border-box;
}
.logo-img {
  position: absolute;
  top: 173px;
  left: 860px;
  width: 179px;
  height: 179px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50%;
}
.title {
  position: absolute;
  top: 384px;
  left: 782px;
  width: 360px;
  height: 39px;
  font-size: 40px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.phone-number {
  position: absolute;
  top: 486px;
  left: 735px;
}
.phone-number > input {
  width: 450px;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px 0px rgba(13, 3, 8, 0.3);
  border-radius: 5px;
  font-size: 25px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.auth-code {
  position: absolute;
  top: 571px;
  left: 735px;
}
.auth-code > input {
  width: 225px;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px 0px rgba(13, 3, 8, 0.3);
  border-radius: 5px;
  font-size: 25px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.auth-submit {
  position: absolute;
  top: 571px;
  left: 985px;
  width: 200px;
  height: 56px;
  background: rgba(255, 190, 0, 1);
  border-radius: 5px;
  font-size: 25px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 56px;
  text-align: center;
  cursor: pointer;
}
.new-password {
  position: absolute;
  left: 735px;
  top: 656px;
}
.new-password > input,
.renew-password > input {
  width: 450px;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px 0px rgba(13, 3, 8, 0.3);
  border-radius: 5px;
  font-size: 25px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.renew-password {
  position: absolute;
  top: 741px;
  left: 735px;
}
.register-submit1 {
  position: absolute;
  top: 826px;
  left: 735px;
  width: 215px;
  height: 56px;
  background: rgba(83, 230, 251, 1);
  border-radius: 5px;
  line-height: 56px;
  text-align: center;
  font-size: 29px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
}
.register-submit2 {
  position: absolute;
  left: 970px;
  top: 826px;
  width: 215px;
  height: 56px;
  background: rgba(83, 230, 251, 1);
  border-radius: 5px;
  font-size: 29px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 56px;
  text-align: center;
}
</style>