<template>
  <!-- 一级平台,景区列表,景区详情,资质资料管理 -->
  <div class="scenic-data-manage">
    <div class="container">
      <div class="header">
        <!-- <router-link to="/scenicdetails"> -->
          <div class="return" @click="go">
            <img src="@/assets/images/return.png" alt>
            <span>返回</span>
          </div>
        <!-- </router-link> -->
        <div class="geli"></div>
        <div class="title">景区基本资料</div>
        <div class="user-name">东坡文旅</div>
        <div class="user-position">区管理员</div>
        <div class="quit">
          <el-button type="text" @click="open7">
            <img src="@/assets/images/quit.png" alt="该图无法显示">
          </el-button>
        </div>
      </div>
      <div class="license">
        <div class="license-name">营业执照</div>
        <div class="license-photo">
          <img src alt>
        </div>
      </div>
      <div class="other-license">
        <div class="other-license-name">其他相关资质</div>
        <!-- v-for循环产生c从服务器拿到的图片 -->
        <div class="other-license-photo">
          <div v-for="item in list" :key="item.id">
            <img :src="item.url" alt>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "scenicstrategy",
  data() {
    return {
      list: [
        { id: 0, url: "xxxx" },
        { id: 1, url: "xxxx" },
        { id: 3, url: "xxxx" }
      ]
    };
  },
  methods: {
    open7() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    go() {
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="" scoped>
.scenic-data-manage {
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
}
.container {
  height: 100%;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.header {
  position: absolute;
  width: 1920px;
  height: 308px;
  background: rgba(75, 196, 218, 1);
}
.return > img {
  position: absolute;
  top: 41px;
  left: 57px;
  width: 50px;
  height: 50px;
  cursor: pointer;
}
.return > span {
  position: absolute;
  top: 38px;
  left: 100px;
  font-size: 40px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  cursor: pointer;
}
.geli {
  position: absolute;
  top: 49px;
  left: 194px;
  width: 1px;
  height: 35px;
  border: 1px solid rgba(255, 255, 255, 1);
}
.title {
  position: absolute;
  top: 25px;
  left: 224px;
  font-size: 60px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.user-name {
  position: absolute;
  top: 46px;
  left: 1423px;
  width: 123px;
  height: 28px;
  font-size: 30px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.user-position {
  position: absolute;
  top: 55px;
  left: 1562px;
  width: 113px;
  height: 26px;
  background: rgba(255, 190, 0, 1);
  border-radius: 13px;
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 26px;
  text-align: center;
}
.quit {
  position: absolute;
  top: 40px;
  left: 1843px;
  width: 30px;
  height: 31px;
}
.license {
  position: absolute;
  top: 120px;
  left: 40px;
  width: 518px;
  height: 916px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.license-name {
  position: absolute;
  top: 30px;
  left: 31px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.license-photo {
  position: absolute;
  top: 173px;
  left: 31px;
  width: 453px;
  height: 624px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.license-photo > img {
  width: 100%;
  height: 100%;
}
.other-license-name {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.other-license {
  position: absolute;
  top: 120px;
  left: 598px;
  width: 1282px;
  height: 916px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.other-license-photo > div:nth-child(1),
.other-license-photo > div:nth-child(2),
.other-license-photo > div:nth-child(3),
.other-license-photo > div:nth-child(4),
.other-license-photo > div:nth-child(5),
.other-license-photo > div:nth-child(6) {
  position: absolute;
  width: 176px;
  height: 240px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
  margin-top: 121px;
  margin-left: 30px;
}
.other-license-photo > div:nth-child(2) {
  left: 226px;
}
.other-license-photo > div:nth-child(3) {
  left: 422px;
}
.other-license-photo > div:nth-child(4) {
  left: 618px;
}
.other-license-photo > div:nth-child(5) {
  left: 814px;
}
.other-license-photo > div:nth-child(6) {
  left: 1010px;
}
</style>
