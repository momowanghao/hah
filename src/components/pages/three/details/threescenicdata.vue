<template>
  <!-- 一级平台,景区列表-景区基本详情页 -->
  <div class="scenic-data">
    <div class="container">
      <div class="header">
        <router-link to="/threescenicdetails">
          <div class="return" @click="go">
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
        <div class="cover-photo">封面图片</div>
        <div class="choice-photo">选择图片</div>
        <div class="photo-position">
          <img src alt>
        </div>
        <div class="photo-size">
          <div>上传景区封面图</div>
          <div>支持2MB以内的JPG、JPGE、PNG图片</div>
        </div>
        <div class="photo-preview">图片预览</div>
      </div>
      <div class="container-two">
        <div class="scenic-basic-data">景区基本资料</div>
        <div class="scenic-name">
          <input type="text" placeholder="填写景区名称">
        </div>
        <div class="scenic-basic-details">
          <textarea name id maxlength="500" placeholder="填写景区简介" required></textarea>
        </div>
      </div>
      <div class="container-three">
        <div class="scenic-vr">景区VR链接</div>
        <div class="scenic-vr-position">
          <span>http://</span>
          <span>
            <input type="text">
          </span>
        </div>
      </div>
      <div class="container-four">
        <div class="scenic-album">
          <span>景区相册</span>
          <span>(最多上传9张图片)</span>
        </div>
        <div class="photos">
          <div></div>
        </div>
      </div>
      <div class="container-five">
        <div class="scenic-open-date">景区开放时间</div>
        <div class="scenic-open-date-details">
          <textarea name id placeholder="请输入景区开放时间"></textarea>
        </div>
      </div>
      <div class="container-six">
        <div class="scenic-admission-ticket">景区门票信息</div>
        <div class="scenic-admission-ticket-details">
          <textarea name id cols="30" rows="10" placeholder="请输入景区门票详情"></textarea>
        </div>
      </div>
      <div class="container-seven">
        <div class="scenic-phone">
          <span>景区联系电话</span>
          <span>(号码之间用"、"隔开)</span>
        </div>
        <div class="scenic-phone-details">
          <textarea name id cols="30" rows="10" placeholder="请输入电话号码"></textarea>
        </div>
      </div>
      <div class="submit">上传审核</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "scenicdata",
  data() {
    return {};
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
    go(){
      this.$router.go(-1);
    }
  }
};
</script>
<style lang="" scoped>
.scenic-data {
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
.cover-photo {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.choice-photo {
  position: absolute;
  top: 117px;
  left: 30px;
  width: 180px;
  height: 50px;
  background: rgba(76, 198, 220, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  border: 0;
  line-height: 50px;
  text-align: center;
}
.photo-size {
  position: absolute;
  top: 198px;
  left: 37px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.photo-preview {
  position: absolute;
  top: 284px;
  left: 596px;
  width: 81px;
  height: 20px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.photo-position {
  position: absolute;
  top: 92px;
  left: 593px;
  width: 333px;
  height: 180px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.container-two {
  position: absolute;
  top: 474px;
  left: 40px;
  width: 1840px;
  height: 394px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic-basic-data {
  position: absolute;
  top: 29px;
  left: 30px;
  width: 212px;
  height: 33px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-name {
  position: absolute;
  top: 92px;
  left: 30px;
}
.scenic-name > input {
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
  line-height: 50px;
}
.scenic-basic-details {
  position: absolute;
  top: 172px;
  left: 30px;
}
.scenic-basic-details > textarea {
  width: 1780px;
  height: 192px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
}
.container-three {
  position: absolute;
  left: 40px;
  top: 888px;
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
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.scenic-vr-position > span:nth-child(2) {
  position: absolute;
  top: 92px;
  left: 173px;
}
.scenic-vr-position > span:nth-child(2) > input {
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
  top: 32px;
  left: 186px;
  font-size: 28px;
  font-family: PingFangSC-Medium;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.container-five {
  position: absolute;
  top: 1402px;
  left: 40px;
  width: 910px;
  height: 302px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic-open-date {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-open-date-details {
  position: absolute;
  top: 92px;
  left: 30px;
}
.scenic-open-date-details > textarea {
  width: 850px;
  height: 180px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);;
}
.container-six {
  position: absolute;
  top: 1402px;
  left: 970px;
  width: 910px;
  height: 302px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic-admission-ticket {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-admission-ticket-details {
  position: absolute;
  top: 92px;
  left: 30px;
}
.scenic-admission-ticket-details > textarea {
  width: 850px;
  height: 180px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
 font-weight: bold;
  color: rgba(77, 77, 77, 1);
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
}
.scenic-phone-details > textarea {
  width: 1780px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
  line-height: 50px;
}
.submit {
  position: absolute;
  top: 1936px;
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
  margin-bottom:30px;
}
</style>
