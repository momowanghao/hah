<template>
  <!-- 一级平台,日常资料审核,基本资料审核 -->
  <div class="data-content">
    <div class="container">
      <div class="header">
        <router-link to="/firsthomefour">
          <div class="return">
            <img src="@/assets/images/return.png" alt>
            <span>返回</span>
          </div>
        </router-link>
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
      <div class="container-one">
        <div class="cover">封面图片</div>
        <div class="cover-photo-photo">
          <img src="url" alt>
        </div>
        <div class="cover-photo-preview">图片预览</div>
      </div>
      <div class="container-two1">
        <div class="scenic">攻略内容</div>
        <div class="scenic-title">{{strategy-title}}</div>
        <div class="scenic-content">{{strategy-content}}</div>
      </div>
      <div class="container-three">
        <div class="scenic-vr">景区VR链接</div>
        <div class="scenic-vr-position">
          <span>http://</span>
          <span class="scenic-vr-content"></span>
        </div>
      </div>
      <div class="container-four">
        <div class="scenic-album">
          <span>景区相册</span>
          <span>(最多上传9张图片)</span>
        </div>
        <div class="photos">
          <div class="photos-details" v-for="item in list" :key="item.id">
            <img src alt>
          </div>
        </div>
      </div>
      <div class="container-five">
        <div class="scenic-open-date">景区开放时间</div>
        <div class="scenic-open-date-details">{{scenic-open-date-details}}</div>
      </div>
      <div class="container-six">
        <div class="scenic-admission-ticket">景区门票信息</div>
        <div class="scenic-admission-ticket-details">{{scenic-admission-ticket-details}}</div>
      </div>
      <div class="container-seven">
        <div class="scenic-phone">
          <span>景区联系电话</span>
          <span>(号码之间用"、"隔开)</span>
        </div>
        <div class="scenic-phone-details">{{scenic-phone-details}}</div>
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
        <div class="other-license-detail">
          <div class="other-license-photo" v-for="item in list" :key="item.id">
            <img :src="item.url" alt>
          </div>
        </div>
      </div>
      <div class="submit-one">驳回</div>
      <div class="submit-two">通过申请</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "datacontent",
  data() {
    return {
      list: [
        { id: 0, url: "xxx" },
        { id: 1, url: "xx" },
        { id: 2, url: "xx" },
        { id: 3, url: "xx" },
        { id: 4, url: "xx" }
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
    }
  }
};
</script>
<style scoped>
.data-content {
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
}
.return > span {
  position: absolute;
  top: 38px;
  left: 100px;
  font-size: 40px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
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
.container-one {
  position: absolute;
  top: 120px;
  left: 40px;
  width: 1840px;
  height: 334px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.cover {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.cover-photo-photo {
  position: absolute;
  top: 92px;
  left: 30px;
  width: 333px;
  height: 180px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.cover-photo-photo > img {
  width: 100%;
  height: 100%;
}
.cover-photo-preview {
  position: absolute;
  top: 284px;
  left: 33px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.container-two1 {
  position: absolute;
  top: 474px;
  left: 40px;
  width: 1840px;
  height: 394px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-title {
  position: absolute;
  top: 92px;
  left: 30px;
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.scenic-content {
  position: absolute;
  top: 172px;
  left: 30px;
  width: 1780px;
  height: 192px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.container-three {
  position: absolute;
  top: 888px;
  left: 40px;
  width: 1840px;
  height: 172px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic-vr {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-vr-position > span:nth-child(1) {
  position: absolute;
  top: 106px;
  left: 51px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.scenic-vr-position > span:nth-child(2) {
  position: absolute;
  top: 92px;
  left: 173px;
  width: 1637px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.container-four {
  position: absolute;
  top: 1080px;
  left: 40px;
  width: 1840px;
  height: 302px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.cover-photo-photo {
  position: absolute;
  top: 92px;
  left: 30px;
  width: 333px;
  height: 180px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.cover-photo-photo > img {
  width: 100%;
  height: 100%;
}
.cover-photo-preview {
  position: absolute;
  top: 284px;
  left: 33px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.container-two {
  position: absolute;
  top: 474px;
  left: 40px;
  width: 1840px;
  height: 302px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic-album > span:nth-child(1) {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-album > span:nth-child(2) {
  position: absolute;
  left: 186px;
  top: 32px;
  font-size: 28px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.photos > div.photos-details:nth-child(1),
.photos > div.photos-details:nth-child(2),
.photos > div.photos-details:nth-child(3),
.photos > div.photos-details:nth-child(4),
.photos > div.photos-details:nth-child(5),
.photos > div.photos-details:nth-child(6),
.photos > div.photos-details:nth-child(7),
.photos > div.photos-details:nth-child(8),
.photos > div.photos-details:nth-child(9) {
  position: absolute;
  top: 92px;
  left: 30px;
  width: 180px;
  height: 180px;
  background: rgba(229, 229, 229, 1);
  border-radius: 5px;
}
.photos > div.photos-details:nth-child(2) {
  left: 230px;
}
.photos > div.photos-details:nth-child(3) {
  left: 430px;
}
.photos > div.photos-details:nth-child(4) {
  left: 630px;
}
.photos > div.photos-details:nth-child(5) {
  left: 830px;
}
.photos > div.photos-details:nth-child(6) {
  left: 1030px;
}
.photos > div.photos-details:nth-child(7) {
  left: 1230px;
}
.photos > div.photos-details:nth-child(8) {
  left: 1430px;
}
.photos > div.photos-details:nth-child(9) {
  left: 1630px;
}
.photos > div.photos-details > img {
  width: 100%;
  height: 100%;
}
.container-five,
.container-six {
  position: absolute;
  top: 1402px;
  left: 40px;
  width: 910px;
  height: 302px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.container-six {
  left: 970px;
}
.scenic-open-date,
.scenic-admission-ticket {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-open-date-details,
.scenic-admission-ticket-details {
  position: absolute;
  top: 92px;
  left: 30px;
  width: 850px;
  height: 180px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.container-seven {
  position: absolute;
  top: 1724px;
  left: 40px;
  width: 1840px;
  height: 172px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic-phone > span:nth-child(1) {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-phone > span:nth-child(2) {
  position: absolute;
  top: 32px;
  left: 259px;
  font-size: 28px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.scenic-phone-details {
  position: absolute;
  top: 92px;
  left: 30px;
  width: 1780px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.license {
  position: absolute;
  top: 1916px;
  left: 40px;
  width: 518px;
  height: 806px;
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
  top: 92px;
  left: 30px;
  width: 458px;
  height: 631px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.other-license {
  position: absolute;
  left: 598px;
  top: 1916px;
  width: 1282px;
  height: 806px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.other-license-name {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
div.other-license-photo:nth-child(1),
div.other-license-photo:nth-child(2),
div.other-license-photo:nth-child(3),
div.other-license-photo:nth-child(4),
div.other-license-photo:nth-child(5),
div.other-license-photo:nth-child(6) {
  position: absolute;
  top: 92px;
  width: 176px;
  height: 240px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
div.other-license-photo:nth-child(1) {
  left: 30px;
}
div.other-license-photo:nth-child(2) {
  left: 226px;
}
div.other-license-photo:nth-child(3) {
  left: 422px;
}
div.other-license-photo:nth-child(4) {
  left: 618px;
}
div.other-license-photo:nth-child(5) {
  left: 814px;
}
div.other-license-photo:nth-child(6) {
  left: 1080px;
}
.submit-one {
  position: absolute;
  top: 2762px;
  left: 1400px;
  width: 220px;
  height: 70px;
  background: rgba(255, 40, 40, 1);
  border-radius: 5px;
  font-size: 40px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 70px;
  text-align: center;
}
.submit-two {
  position: absolute;
  top: 2762px;
  left: 1660px;
  width: 220px;
  height: 70px;
  background: rgba(76, 198, 220, 1);
  border-radius: 5px;
  font-size: 40px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 70px;
  text-align: center;
}
</style>

