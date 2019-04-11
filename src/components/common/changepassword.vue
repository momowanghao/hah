<template>
  <!-- 修改密码页面 -->
  <div class="change-password">
    <div class="container">
      <div class="change-box">
        <div class="logo-img">
          <img src="@/assets/images/logo.png" alt>
        </div>
        <div class="title">修改密码</div>
        <div class="phone-number">
          <input type="text" placeholder="请输入手机号码">
        </div>
        <div class="auth-code">
          <input type="text" placeholder="请输入验证码">
        </div>
        <div class="auth-submit">获得验证码</div>
        <div class="new-password">
          <input type="password" placeholder="请输入新密码">
        </div>
        <div class="renew-password">
          <input type="password" placeholder="请再次输入新密码">
        </div>
        <div class="submit">确认修改</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "changepassword",
  data() {
    return {};
  },
  beforeDestroy() {
    document.body.style.background = "";
  },
  mounted() {
    document.body.style.background = "#4cc6dc";
  }
};
</script>
<style scoped>
.change-password {
  position: fixed;
  top: 0px;
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
  left: 860px;
  top: 173px;
  width: 179px;
  height: 179px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50%;
}
.title {
  position: absolute;
  left: 870px;
  top: 384px;
  width: 160px;
  height: 39px;
  font-size: 40px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.phone-number {
  position: absolute;
  left: 735px;
  top: 486px;
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
  left: 735px;
  top: 571px;
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
  left: 985px;
  top: 571px;
  width: 200px;
  height: 56px;
  background: rgba(255, 190, 0, 1);
  border-radius: 5px;
  font-size: 25px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 56px;
  text-align: center;
}
.new-password {
  position: absolute;
  left: 735px;
  top: 656px;
}
.renew-password {
  position: absolute;
  left: 735px;
  top: 741px;
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
.submit {
  position: absolute;
  left: 735px;
  top: 826px;
  width: 450px;
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