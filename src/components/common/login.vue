<template>
  <!-- 登录页面 -->
  <div class="login">
    <div class="container">
      <div></div>
      <div class="login-img">
        <div></div>
        <img src="@/assets/images/login-img.png" alt="该图片无法显示">
      </div>
      <div class="login-box">
        <div class="login-logo">
          <img src="@/assets/images/logo.png" alt>
        </div>
        <div class="title">东坡区旅游平台管理后台</div>
        <div class="form">
          <div class="form-item1">
            <input
              type="text"
              placeholder="请输入手机号"
              ref="user"
              autocorrect="off"
              autocomplete="off"
              v-model="formData.userName"
            >
          </div>
          <div class="form-item2">
            <input
              type="password"
              placeholder="请输入密码"
              ref="pwd"
              autocorrect="off"
              autocomplete="new-password"
              @keyup.enter="submitForm"
              v-model="formData.password"
            >
          </div>
          <router-link to="/changepassword">
            <div class="forget">忘记密码？</div>
          </router-link>
          <div class="submit" @click="submitForm">登录</div>
          <router-link to="/register">
            <div class="apply">申请加入</div>
          </router-link>
        </div>
      </div>
      <div class="login-bottom-img">
        <img src="@/assets/images/login-bottom-img.png" alt="该图片无法显示">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data() {
    return {
      formData: {
        userName: "",
        password: ""
      }
    };
  },
  beforeDestroy() {
    document.body.style.background = "";
  },
  mounted() {
    document.body.style.background = "#4cc6dc";
  },
  methods: {
    submitForm() {
      this.$http
        .post("admin/user/login", {
          mobile: this.formData.userName,
          password: md5(this.formData.password)
        })
        .then(res => {
          if (res.code === "200") {
            // sessionStorage.userInfo = JSON.stringify(res.data)
            this.$store.dispatch("setUserInfo", res.data);
            if (res.data.role === 5) {
              console.log(res.data.areaCode);
              this.$store.dispatch("setAreaCode", res.data.areaCode);
              this.$router.push("/guide");
            } else if (res.data.role === 8) {
              // this.$router.push('/organization/2/511402000000')
              this.$router.push("/guide");
            } else {
              this.$router.push("/guide");
            }
          }
        });
    }
  }
};
</script>
<style scoped>
.login {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(76, 198, 220, 1);
}
.container {
  height: 100%;
  box-sizing: border-box;
}
.login-img {
  position: absolute;
  top: 74px;
  left: 0;
  width: 1100px;
  height: 937px;
}
.login-img > img {
  width: 100%;
  height: 100%;
}
.login-logo {
  position: absolute;
  left: 1348px;
  top: 173px;
  width: 179px;
  height: 179px;
  background: rgba(255, 255, 255, 1);
  border-radius: 50%;
}
.title {
  position: absolute;
  top: 384px;
  left: 1229px;
  width: 442px;
  height: 39px;
  font-size: 40px;
  /* font-family: PingFangSC-Bold; */
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.form-item1 {
  position: absolute;
  top: 486px;
  left: 1223px;
}
.form-item1 > input,
.form-item2 > input {
  width: 450px;
  height: 56px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 4px 0px rgba(13, 3, 8, 0.3);
  border-radius: 5px;
  font-size: 25px;
  font-weight: 400;
  color: rgba(136, 136, 136, 1);
}
.form-item2 {
  position: absolute;
  top: 571px;
  left: 1223px;
}
.forget {
  position: absolute;
  top: 639px;
  left: 1564px;
  width: 105px;
  height: 22px;
  font-size: 21px;
  font-weight: 400;
  text-decoration: underline;
  color: rgba(255, 255, 255, 1);
}
.submit {
  position: absolute;
  top: 685px;
  left: 1223px;
  width: 450px;
  height: 56px;
  background: rgba(255, 190, 0, 1);
  border-radius: 5px;
  font-size: 29px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 56px;
  text-align: center;
  cursor: pointer;
}
.apply {
  position: absolute;
  top: 770px;
  left: 1223px;
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
.login-bottom-img {
  position: absolute;
  top: 825px;
  left: 1357px;
  width: 563px;
  height: 255px;
}
</style>