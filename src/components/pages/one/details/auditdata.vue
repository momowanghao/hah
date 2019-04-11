<template>
<!-- 一级平台,景区入驻审核,申报资料 -->
  <div class="audit-data">
    <div class="container">
      <div class="header">
        <router-link to="/firsthomethree">
          <div class="return">
            <img src="@/assets/images/return.png" alt>
            <span>返回</span>
          </div>
        </router-link>
        <div class="geli"></div>
        <div class="title">申报资料</div>
        <div class="user-name">东坡文旅</div>
        <div class="user-position">区管理员</div>
        <div class="quit">
          <el-button type="text" @click="open7">
            <img src="@/assets/images/quit.png" alt="该图无法显示">
          </el-button>
        </div>
      </div>
      <div class="container-one">
        <div class="license">营业执照</div>
        <div class="license-photo">
          <img src alt>
        </div>
        <div class="other-license">其他相关资质</div>
          <!-- v-for -->
        <div class="other-photo">
          <div class="other-license-photo" v-for="item in list" :key="item.id">
            <img :src="item.url" alt>
          </div>
        </div>
      </div>
      <div class="container-two">
        <div class="scenic-principle">景区负责人信息</div>
        <div class="principle-name">负责人姓名</div>
        <div class="principle-name-details">{{principle-name-details}}</div>
        <div class="id-card">身份证号码</div>
        <div class="id-card-details">{{id-card-details}}</div>
        <div class="phone-one">联系电话①</div>
        <div class="phone-one-number">{{phone-one-number}}</div>
        <div class="phone-two">联系电话②</div>
        <div class="phone-two-number">{{phone-two-number}}</div>
        <div class="location">景区所属乡镇主管部门</div>
        <div class="scenic-location">所属乡镇</div>
        <div class="scenic-location-name">{{scenic-location-name}}</div>
        <div class="location-grop">所属部门</div>
        <div class="location-grop-name">{{location-grop-name}}</div>
      </div>
      <div class="container-three">
        <div class="cover">封面图片</div>
        <div class="cover-photo-big">
          <img src alt>
        </div>
        <div class="cover-photo-middle">
          <img src alt>
        </div>
        <div class="cover-photo-small">
          <img src alt>
        </div>
        <div class="cover-photo-preview-big">大图</div>
        <div class="cover-photo-preview-middle">中图</div>
        <div class="cover-photo-preview-small">小图</div>
        <div class="scenic-title">景区基本资料</div>
        <div class="scenic-name">{{scenic-name}}</div>
        <div class="scenic-data">{{scenic-data}}</div>
        <div class="scenic-VR">景区VR链接</div>
        <div class="scenic-VR-address">
          <span>http://</span>
          <span>{{address}}</span>
        </div>
        <div class="scenic-photo-album">
          <span>景区相册</span>
          <span>(最多上传9张图片)</span>
        </div>
        <!-- v-for -->
        <div class="scenic-photo">
          <div class="scenic-photo-album-details" v-for="item in list" :key="item.id">
            <img :src="item.url" alt>
          </div>
        </div>
        <div class="scenic-open-date">景区开放时间</div>
        <div class="scenic-open-date-details">{{scenic-open-date-detaile}}</div>
        <div class="scenic-admission-ticket">景区门票详情</div>
        <div class="scenic-admission-ticket-details">{{scenic-admission-ticket-details}}</div>
        <div class="scenic-phone">
          <span>景区联系电话</span>
          <span>(多个号码间用"、"隔开)</span>
        </div>
        <div class="scenic-phone-number">{{scenic-phone-number}}</div>
      </div>
      <div class="button-one">驳回</div>
      <div class="button-two">通过审核</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'aubitdata',
  data(){
    return{
      list:[
        {id:0,url:''},
        {id:1,url:''},
        {id:2,url:''},
        {id:3,url:''}
      ]
    }
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
}
</script>
<style lang="" scoped>
.aubit-data {
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
.container-one{
  position:absolute;
  top:120px;
  left:40px;
  width:1840px;
  height:806px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
  border-radius:15px;
}
.license{
  position:absolute;
  top:31px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.license-photo{
  position: absolute;
  top:153px;
  left:69px;
  width:373px;
  height:513px;
  background:rgba(229,229,229,1);
  border-radius:15px;
}
.license-photo>img{
  width:100%;
  height:100%;
}
.other-license{
  position:absolute;
  top:29px;
  left:588px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.other-photo>div.other-license-photo:nth-child(1),
.other-photo>div.other-license-photo:nth-child(2),
.other-photo>div.other-license-photo:nth-child(3),
.other-photo>div.other-license-photo:nth-child(4),
.other-photo>div.other-license-photo:nth-child(5),
.other-photo>div.other-license-photo:nth-child(6){
  position:absolute;
  top:92px;
  left:588px;
  width:176px;
  height:240px;
  background:rgba(229,229,229,1);
  border-radius:15px;
}
.other-photo>div.other-license-photo:nth-child(2){
  left:784px;
}
.other-photo>div.other-license-photo:nth-child(3){
  left:980px;
}
.other-photo>div.other-license-photo:nth-child(4){
  left:1176px;
}
.other-photo>div.other-license-photo:nth-child(5){
  left:1372px;
}
.other-photo>div.other-license-photo:nth-child(6){
  left:1568px;
}
div.other-license-photo>img{
  width:100%;
  height:100%;
}
.container-two{
  position:absolute;
  top:946px;
  left:40px;
  width:1840px;
  height:444px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
  border-radius:15px;
}
.scenic-principle{
  position: absolute;
  top:29px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.principle-name,.id-card,.phone-one,.phone-two{
  position:absolute;
  top:106px;
  left:31px;
  font-size:24px;
  font-weight:500;
  color:rgba(53,53,53,1);
}
.id-card,.phone-two{
  left:778px;
}
.phone-one,.phone-two{
  top:185px;
}
.principle-name-details,.id-card-details,.phone-one-number,.phone-two-number{
  position:absolute;
  top:92px;
  left:171px;
  width:526px;
  height:50px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.id-card-details,.phone-two-number{
  left:918px;
}
.phone-one-number,.phone-two-number{
  top:172px;
}
.location{
  position:absolute;
  top:301px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.scenic-location{
  position:absolute;
  top:378px;
  left:30px;
  font-size:24px;
  font-weight:500;
  color:rgba(53,53,53,1);
}
.scenic-location-name{
  position:absolute;
  top:364px;
  left:171px;
  width:526px;
  height:50px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.location-grop{
  position:absolute;
  top:378px;
  left:776px;
  font-size:24px;
  font-weight:500;
  color:rgba(53,53,53,1);
}
.location-grop-name{
  position:absolute;
  top:364px;
  left:917px;
  width:526px;
  height:50px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.container-three{
  position:absolute;
  top:1410px;
  left:40px;
  width:1840px;
  height:1776px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
  border-radius:15px;
}
.cover{
  position: absolute;
  top:36px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.cover-photo-big{
 position:absolute;
 top:98px;
 left:31px;
 width:333px;
  height:180px;
  background:rgba(229,229,229,1);
  border-radius:15px;
}
.cover-photo-middle{
  position:absolute;
  top:118px;
  left:396px;
  width:282px;
  height:160px;
  background:rgba(229,229,229,1);
  border-radius:15px;
}
.cover-photo-small{
  position: absolute;
  top:158px;
  left:710px;
  width:149px;
  height:120px;
  background:rgba(229,229,229,1);
  border-radius:15px;
}
.cover-photo-big>img,.cover-photo-middle>img,.cover-photo-small>img{
  width:100%;
  height:100%;
}
.cover-photo-preview-big{
  position: absolute;
  top:290px;
  left:33px;
  font-size:20px;
  font-weight:500;
  color:rgba(77,77,77,1);
}
.cover-photo-preview-middle{
  position:absolute;
  top:290px;
  left:398px;
  font-size:20px;
  font-weight:500;
  color:rgba(77,77,77,1);
}
.cover-photo-preview-small{
  position:absolute;
  top:290px;
  left:711px;
  font-size:20px;
  font-weight:500;
  color:rgba(77,77,77,1);
}
.scenic-title{
  position:absolute;
  top:383px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.scenic-name{
  position:absolute;
  top:446px;
  left:30px;
  width:526px;
  height:50px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.scenic-data{
  position:absolute;
  top:526px;
  left:30px;
  width:526px;
  height:50px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.scenic-VR{
  position:absolute;
  top:798px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.scenic-VR-address>span:nth-child(1){
  position:absolute;
  top:874px;
  left:51px;
  font-size:24px;
  font-weight:500;
  color:rgba(53,53,53,1);
}
.scenic-VR-address>span:nth-child(2){
  position:absolute;
  left:173px;
  top:870px;
  width:1637px;
  height:50px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.scenic-photo-album>span:nth-child(1){
  position:absolute;
  top:990px;
  left:30px;
  height:32px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.scenic-photo-album>span:nth-child(2){
  position:absolute;
  top:992px;
  left:186px;
  font-size:28px;
  font-family:PingFangSC-Medium;
  font-weight:500;
  color:rgba(77,77,77,1);
}
.scenic-photo>div.scenic-photo-album-details{
  position:absolute;
  top:1052px;
  width:180px;
  height:180px;
  background:rgba(229,229,229,1);
  border-radius:5px;
}
.scenic-photo>div.scenic-photo-album-details>img{
  width:100%;
  height:100%;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(1){
  left:30px;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(2){
  left:230px;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(3){
  left:430px;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(4){
  left:630px;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(5){
  left:830px;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(6){
  left:1030px;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(7){
  left:1230px;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(8){
  left:1430px;
}
.scenic-photo>div.scenic-photo-album-details:nth-child(9){
  left:1620;
}
.scenic-open-date{
  position:absolute;
  top:1311px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.scenic-open-date-details,.scenic-admission-ticket-details{
  position:absolute;
  top:1374px;
  left:30px;
  width:850px;
  height:180px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.scenic-admission-ticket-details{
  left:960px;
}
.scenic-admission-ticket{
  position:absolute;
  top:1311px;
  left:960px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.scenic-phone>span:nth-child(1){
  position:absolute;
  top:1643px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.scenic-phone>span:nth-child(2){
  position:absolute;
  top:1636px;
  left:259px;
  font-size:28px;
  font-weight:500;
  color:rgba(77,77,77,1);
}
.scenic-phone-number{
  position:absolute;
  top:1696px;
  left:30px;
  width:1780px;
  height:50px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.button-one{
  position:absolute;
  left:1400px;
  top:3226px;
  width:220px;
  height:70px;
  background:rgba(255,40,40,1);
  border-radius:5px;
  font-size:40px;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height: 70px;
  text-align: center;
  margin-bottom:30px;
}
.button-two{
  position:absolute;
  top:3226px;
  left:1660px;
  width:220px;
  height:70px;
  background:rgba(76,198,220,1);
  border-radius:5px;
  font-size:40px;
  font-family:PingFangSC-Bold;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height: 70px;
  text-align: center;
}
</style>