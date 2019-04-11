<template>
  <!-- 景区平台自主注册申报 -->
  <div class="scenic-register">
    <div class="container">
      <div class="header">
        <div class="title">自主注册申报</div>
      </div>
      <div class="container-one">
        <div class="license">营业执照</div>
        <div class="license-photo">
          <img src alt>
        </div>
        <div class="other-license">其他相关资质</div>
        <!-- v-for -->
        <div class="other-license-photo" v-for="item in list" :key="item.id">
          <img :src="item.url" alt>
        </div>
        <div class="license-choice">选择图片</div>
        <div class="license-choice-details">
          上传营业执照（正本）扫描件
          支持1MB以内的JPG、JPGE、PNG图片
        </div>
        <div class="other-license-choice">
          上传其他相关资质证书扫描件
          支持1MB以内的JPG、JPGE、PNG图片
        </div>
      </div>
      <div class="container-two">
        <div class="scenic-principle">景区负责人信息</div>
        <div class="principle-name">负责人姓名</div>
        <div class="principle-name-details">
          <input type="text">
        </div>
        <div class="id-card">身份证号码</div>
        <div class="id-card-details">
          <input type="text">
        </div>
        <div class="phone-one">联系电话①</div>
        <div class="phone-one-number">
          <input type="text">
        </div>
        <div class="phone-two">联系电话②</div>
        <div class="phone-two-number">
          <input type="text">
        </div>
        <div class="location">景区所属乡镇主管部门</div>
        <div class="scenic-location">所属乡镇</div>
        <div class="scenic-location-name">
          <input type="text">
        </div>
        <div class="location-grop">所属部门</div>
        <div class="location-grop-name">
          <input type="text">
        </div>
      </div>
      <div class="container-three">
        <div class="cover">封面图片</div>
        <div class="choice-photo">选择图片</div>
        <div class="choice-photo-details">
          上传景区封面图（一张）
          支持1MB以内的JPG、JPGE、PNG图片
        </div>
        <div class="cover-photo">
          <img src alt>
        </div>
        <div class="cover-photo-preview">图片预览</div>
        <div class="scenic-title">景区基本资料</div>
        <div class="scenic-name">
          <input type="text" placeholder="请输入景区名称">
        </div>
        <div class="scenic-data">
          <textarea name id cols="30" rows="10"></textarea>
        </div>
        <div class="scenic-VR">景区VR链接</div>
        <div class="scenic-VR-address">
          <div>http://</div>
          <div>
            <input type="text">
          </div>
        </div>
        <div class="scenic-photo">
          <div class="scenic-photo-album">
            <span>景区相册</span>
            <span>(最多上传9张图片)</span>
          </div>
          <!-- 多张图片上传与预览,限定数量 -->
          <div>
            <div class="scenic-photo-album-details" v-for="item in list" :key="item.id">
              <img :src="item.url" alt>
            </div>
          </div>
        </div>
        <div class="scenic-open-date">景区开放时间</div>
        <div class="scenic-open-date-details">
          <textarea name id cols="30" rows="10"></textarea>
        </div>
        <div class="scenic-admission-ticket">景区门票详情</div>
        <div class="scenic-admission-ticket-details">
          <textarea name id cols="30" rows="10"></textarea>
        </div>
        <div class="scenic-phone">
          <span>景区联系电话</span>
          <span>(多个号码间用"、"隔开)</span>
        </div>
        <div class="scenic-phone-number">
          <textarea name id cols="30" rows="10"></textarea>
        </div>
      </div>
      <div class="submit">上传审核</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "scenicregister",
  data() {
    return {
      list: [
        { id: 0, url: "" },
        { id: 1, url: "" },
        { id: 2, url: "" },
        { id: 3, url: "" },
        { id: 4, url: "" }
      ]
    };
  }
};
</script>
<style lang="" scoped>
.scenic-register {
  position: fixed;
  top: 0;
  left: 0px;
  bottom: 0px;
  right: 0px;
}
.container {
  height: 100%;
  box-sizing: border-box;
}
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 1920px;
  height: 308px;
  background: rgba(75, 196, 218, 1);
}
.title {
  position: absolute;
  top: 25px;
  left: 49px;
  font-size: 60px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.container-one {
  position: absolute;
  top: 120px;
  left: 40px;
  width: 1840px;
  height: 806px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.license {
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
  left: 77px;
  width: 364px;
  height: 501px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.license-photo > img {
  width: 100%;
  height: 100%;
}
.other-license {
  position: absolute;
  top: 29px;
  left: 588px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.other-license-photo:nth-child(1),
.other-license-photo:nth-child(2),
.other-license-photo:nth-child(3),
.other-license-photo:nth-child(4),
.other-license-photo:nth-child(5),
.other-license-photo:nth-child(6) {
  position: absolute;
  top: 92px;
  left: 588px;
  width: 176px;
  height: 240px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.other-license-photo:nth-child(2) {
  left: 784px;
}
.other-license-photo:nth-child(3) {
  left: 980px;
}
.other-license-photo:nth-child(4) {
  left: 1176px;
}
.other-license-photo:nth-child(5) {
  left: 1372px;
}
.other-license-photo:nth-child(6) {
  left: 1568px;
}
.other-license-photo > img {
  width: 100%;
  height: 100%;
}
.license-choice {
  position: absolute;
  top: 633px;
  left: 31px;
  width: 180px;
  height: 50px;
  background: rgba(76, 198, 220, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
  text-align: center;
}
.license-choice-details {
  position: absolute;
  top: 714px;
  left: 38px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
  width: 416px;
  height: 61px;
}
.other-license-choice {
  position: absolute;
  top: 714px;
  left: 588px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
  width: 416px;
  height: 61px;
}
.container-two {
  position: absolute;
  top: 946px;
  left: 40px;
  width: 1840px;
  height: 444px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic-principle {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 30px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
  line-height: 33px;
  text-align: center;
}
.principle-name,
.id-card,
.phone-one,
.phone-two {
  position: absolute;
  font-size: 24px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.principle-name,
.id-card,
.phone-one {
  top: 106px;
  left: 31px;
}
.phone-one,
.phone-two {
  top: 185px;
}
.id-card,
.phone-two {
  left: 778px;
}
.principle-name-details,
.id-card-details,
.phone-one-number,
.phone-two-number {
  position: absolute;
}
.principle-name-details > input,
.id-card-details > input,
.phone-one-number > input,
.phone-two-number > input {
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.principle-name-details,
.id-card-details,
.phone-one-number {
  top: 92px;
  left: 171px;
}
.phone-one-number,
.phone-two-number {
  top: 172px;
}
.id-card-details,
.phone-two-number {
  left: 918px;
}
.location {
  position: absolute;
  top: 301px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-location,
.location-grop {
  position: absolute;
  top: 378px;
  left: 30px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.location-grop {
  left: 776px;
}
.scenic-location-name,
.location-grop-name {
  position: absolute;
  top: 364px;
  left: 171px;
}
.location-grop-name {
  left: 917px;
}
.scenic-location-name > input,
.location-grop-name > input {
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.container-three {
  position: absolute;
  top: 1410px;
  left: 40px;
  width: 1840px;
  height: 1776px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.cover {
  position: absolute;
  top: 36px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.choice-photo {
  position: absolute;
  top: 123px;
  left: 30px;
  width: 180px;
  height: 50px;
  background: rgba(76, 198, 220, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
  line-height: 50px;
  text-align: center;
}
.choice-photo-details {
  position: absolute;
  top: 204px;
  left: 37px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
  width: 416px;
  height: 61px;
}
.cover-photo {
  position: absolute;
  top: 98px;
  left: 593px;
  width: 333px;
  height: 180px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.cover-photo > img {
  width: 100%;
  height: 100%;
}
.cover-photo-preview {
  position: absolute;
  top: 290px;
  left: 596px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.scenic-title {
  position: absolute;
  top: 393px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-name {
  position: absolute;
  top: 446px;
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
.scenic-data {
  position: absolute;
  top: 526px;
  left: 30px;
}
.scenic-data > textarea {
  width: 1780px;
  height: 192px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
  line-height: 50px;
}
.scenic-VR {
  position: absolute;
  top: 798px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-VR-address > div:nth-child(1) {
  position: absolute;
  top: 874px;
  left: 51px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.scenic-VR-address > div:nth-child(2) {
  position: absolute;
  top: 860px;
  left: 173px;
}
.scenic-VR-address > div:nth-child(2) > input {
  width: 1637px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.scenic-photo-album > span:nth-child(1) {
  position: absolute;
  top: 990px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-photo-album > span:nth-child(2) {
  position: absolute;
  top: 992px;
  left: 186px;
  font-size: 28px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.scenic-photo-album-details:nth-child(1),
.scenic-photo-album-details:nth-child(2),
.scenic-photo-album-details:nth-child(3),
.scenic-photo-album-details:nth-child(4),
.scenic-photo-album-details:nth-child(5),
.scenic-photo-album-details:nth-child(6),
.scenic-photo-album-details:nth-child(7),
.scenic-photo-album-details:nth-child(8) {
  position: absolute;
  top: 1052px;
  left: 30px;
  width: 180px;
  height: 180px;
  background: rgba(229, 229, 229, 1);
  border-radius: 5px;
}
.scenic-photo-album-details:nth-child(2) {
  left: 230px;
}
.scenic-photo-album-details:nth-child(3) {
  left: 430px;
}
.scenic-photo-album-details:nth-child(4) {
  left: 630px;
}
.scenic-photo-album-details:nth-child(5) {
  left: 830px;
}
.scenic-photo-album-details:nth-child(6) {
  left: 1030px;
}
.scenic-photo-album-details:nth-child(7) {
  left: 1230px;
}
.scenic-photo-album-details:nth-child(8) {
  left: 1430px;
}
.scenic-photo-album-details > img {
  width: 100%;
  height: 100%;
}
.scenic-open-date,
.scenic-admission-ticket {
  position: absolute;
  top: 1331px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-open-date-details,
.scenic-admission-ticket-details {
  position: absolute;
  top: 1374px;
  left: 31px;
}
.scenic-admission-ticket,.scenic-admission-ticket-details{
  left: 960px;
}
.scenic-open-date-details > textarea,
.scenic-admission-ticket-details > textarea {
  width: 850px;
  height: 180px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
}
.scenic-phone > span:nth-child(1) {
  position: absolute;
  top: 1634px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-phone > span:nth-child(2) {
  position: absolute;
  top: 1636px;
  left: 259px;
  font-size: 28px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
}
.scenic-phone-number {
  position: absolute;
  top: 1696px;
  left: 30px;
}
.scenic-phone-number > textarea {
  width: 1780px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
}
.submit {
  position: absolute;
  top: 3226px;
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