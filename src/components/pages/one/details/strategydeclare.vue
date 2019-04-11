<template>
<!-- 一级平台,日常资料更新审核,攻略审核 -->
    <div class="strategy-declare">
        <div class="container">
            <div class="header">
                <router-link to="/onepagefourstrategy">
                    <div class="return">
                        <img src="@/assets/images/return.png" alt="">
                        <span>返回</span>
                    </div>
                </router-link>
                <div class="geli"></div>
                <div class="title">景区详情</div>
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
                    <img src="url" alt="">
                </div>
                <div class="cover-photo-preview">图片预览</div>
            </div>
            <div class="container-two">
                <div class="scenic-album">
                    <span>攻略图片</span>
                    <span>(最多上传9张图片)</span>
                </div>
                <div class="photos">
                    <div class="photo-details" v-for="item in list" :key="item.id">
                        <img :src="item.url" alt="">
                    </div>
                </div>
            </div>
            <div class="container-three">
                <div class="strategy">攻略内容</div>
                <div class="strategy-title">{{strategy-title}}</div>
                <div class="strategy-content">{{strategy-content}}</div>
            </div>
            <div class="submit-one">驳回</div>
            <div class="submit-two">通过审核</div>
        </div>
    </div>
</template>
<script>
export default {
    name:"strategydeclare",
    data(){
        return{
            list:[
                {id:0,url:'xxx'},
                {id:1,url:'zzzzz'},
                {id:2,url:'xxcc'},
                {id:3,url:'ewerert'}
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
<style scoped>
.strategy-declare {
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
    height:334px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
    border-radius:15px;
}
.cover{
    position:absolute;
    top:30px;
    left:30px;
    font-size:34px;
    font-family:PingFangSC-Bold;
    font-weight:bold;
    color:rgba(77,77,77,1);
}
.cover-photo-photo{
    position:absolute;
    top:92px;
    left:30px;
    width:333px;
    height:180px;
    background:rgba(229,229,229,1);
    border-radius:15px;
}
.cover-photo-photo>img{
    width:100%;
    height:100%;
}
.cover-photo-preview{
    position:absolute;
    top:284px;
    left:33px;
    font-size:20px;
    font-weight:500;
    color:rgba(77,77,77,1);
}
.container-two{
    position:absolute;
    top:474px;
    left:40px;
    width:1840px;
    height:302px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
    border-radius:15px;
}
.scenic-album>span:nth-child(1){
    position:absolute;
    top:30px;
    left:30px;
    font-size:34px;
    font-weight:bold;
    color:rgba(77,77,77,1);
}
.scenic-album>span:nth-child(2){
    position:absolute;
    left:186px;
    top:32px;
    font-size:28px;
    font-weight:500;
    color:rgba(77,77,77,1);
}
.photos>div.photo-details:nth-child(1),
.photos>div.photo-details:nth-child(2),
.photos>div.photo-details:nth-child(3),
.photos>div.photo-details:nth-child(4),
.photos>div.photo-details:nth-child(5),
.photos>div.photo-details:nth-child(6),
.photos>div.photo-details:nth-child(7),
.photos>div.photo-details:nth-child(8),
.photos>div.photo-details:nth-child(9)
{
    position:absolute;
    top:92px;
    left:30px;
    width:180px;
    height:180px;
    background:rgba(229,229,229,1);
    border-radius:5px;
}
.photos>div.photo-details:nth-child(2){
    left:230px;
}
.photos>div.photo-details:nth-child(3){
    left:430px;
}
.photos>div.photo-details:nth-child(4){
    left:630px;
}
.photos>div.photo-details:nth-child(5){
    left:830px;
}
.photos>div.photo-details:nth-child(6){
    left:1030px;
}
.photos>div.p
hoto-details:nth-child(7){
    left:1230px;
}
.photos>div.photo-details:nth-child(8){
    left:1430px;
}
.photos>div.photo-details:nth-child(9){
    left:1630px;
}
.container-three{
    position:absolute;
    top:796px;
    left:40px;
    width:1840px;
    height:394px;
    background:rgba(255,255,255,1);
    box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
    border-radius:15px;
}
.strategy{
    position:absolute;
    top:30px;
    left:30px;
    font-size:34px;
    font-weight:bold;
    color:rgba(77,77,77,1);
}
.strategy-title{
    position:absolute;
    top:92px;
    left:30px;
    width:526px;
    height:50px;
    background:rgba(246,247,251,1);
    border-radius:5px;
}
.strategy-content{
    position:absolute;
    top:172px;
    left:30px;
    width:1780px;
    height:192px;
    background:rgba(246,247,251,1);
    border-radius:5px;
}
.submit-one{
    position:absolute;
    top:1230px;
    left:1400px;
    width:220px;
    height:70px;
    background:rgba(255,40,40,1);
    border-radius:5px;
    font-size:40px;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:70px;
    text-align: center;
    margin-bottom:30px;
}
.submit-two{
    position:absolute;
    top:1230px;
    left:1660px;
    width:220px;
    height:70px;
    background:rgba(76,198,220,1);
    border-radius:5px;
    font-size:40px;
    font-weight:bold;
    color:rgba(255,255,255,1);
    line-height:70px;
    text-align: center;
    margin-bottom:30px;
}
</style>
