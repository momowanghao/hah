<template>
<!--一级平台,每月巡查,巡查列表,巡查详情-->
  <div class="patrol-list-data">
    <div class="container">
      <div class="header">
        <router-link to="/patrollist">
          <div class="return">
            <img src="@/assets/images/return.png" alt>
            <span>返回</span>
          </div>
        </router-link>
        <div class="geli"></div>
        <div class="title">每月巡查报表</div>
        <div class="user-name">东坡文旅</div>
        <div class="user-position">区管理员</div>
        <div class="quit">
          <el-button type="text" @click="open7">
            <img src="@/assets/images/quit.png" alt="该图无法显示">
          </el-button>
        </div>
      </div>
      <div class="container-one">
        <div class="fire-control">消防安全</div>
        <div class="fire-control-photo">
          <div class="fire-control-data" v-for="item in list" :key="item.id">
            <img :src="item.url" alt>
          </div>
        </div>
      </div>
      <div class="container-two">
        <div class="road-control">消防安全</div>
        <div class="road-control-details">  
          <div class="road-control-data" v-for="item in list" :key="item.id">
            <img :src="item.url" alt>
          </div>
        </div>
      </div>
      <div class="container-three">
          <div class="writing-report">文字报告</div>
          <div class="writing-report-details">{{writing-report-details}}</div>
      </div>
      <div class="submit-one">驳回</div>
      <div class="submit-two">通过审核</div>
    </div>
  </div>
</template>
<script>
export default {
  name:'question-list',
  data(){
    return{
      list:[
        {id:0,name:'',position:'',url:''},
        {id:1,name:'',position:'',url:''},
        {id:2,name:'',position:'',url:''},
        {id:3,name:'',position:'',url:''}
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
.patrol-list-data{
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
  height:302px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
  border-radius:15px;
}
.fire-control,.road-control{
  position:absolute;
  top:30px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.fire-control-photo>div.fire-control-data:nth-child(1),
.fire-control-photo>div.fire-control-data:nth-child(2),
.fire-control-photo>div.fire-control-data:nth-child(3),
.fire-control-photo>div.fire-control-data:nth-child(4),
.fire-control-photo>div.fire-control-data:nth-child(5),
.fire-control-photo>div.fire-control-data:nth-child(6),
.fire-control-photo>div.fire-control-data:nth-child(7),
.fire-control-photo>div.fire-control-data:nth-child(8),
.fire-control-photo>div.fire-control-data:nth-child(9),
.road-control-details>div.road-control-data:nth-child(1),
.road-control-details>div.road-control-data:nth-child(2),
.road-control-details>div.road-control-data:nth-child(3),
.road-control-details>div.road-control-data:nth-child(4),
.road-control-details>div.road-control-data:nth-child(5),
.road-control-details>div.road-control-data:nth-child(6),
.road-control-details>div.road-control-data:nth-child(7),
.road-control-details>div.road-control-data:nth-child(8),
.road-control-details>div.road-control-data:nth-child(9)
{
  position:absolute;
  top:92px;
  left:30px;
  width:180px;
  height:180px;
  background:rgba(229,229,229,1);
  // background:red;
  border-radius:5px;
}
.fire-control-photo>div.fire-control-data:nth-child(2),
.road-control-details>div.road-control-data:nth-child(2){
  left:230px;
}
.fire-control-photo>div.fire-control-data:nth-child(3),
.road-control-details>div.road-control-data:nth-child(3){
  left:430px;
}
.fire-control-photo>div.fire-control-data:nth-child(4),
.road-control-details>div.road-control-data:nth-child(4){
  left:630px;
}
.fire-control-photo>div.fire-control-data:nth-child(5),
.road-control-details>div.road-control-data:nth-child(5){
  left:830px;
}
.fire-control-photo>div.fire-control-details:nth-child(6)
.road-control-details>div.road-control-data:nth-child(6){
  left:1030px;
}
.fire-control-photo>div.fire-control-data:nth-child(7),
.road-control-details>div.road-control-data:nth-child(7){
  left:1230px;
}
.fire-control-photo>div.fire-control-data:nth-child(8),
.road-control-details>div.road-control-data:nth-child(8)
{
  left:1430px;
}
.fire-control-photo>div.fire-control-data:nth-child(9),
.road-control-details>div.road-control-data:nth-child(9){
  left:1630px;
}
.fire-control-data>img,
.road-control-details>div>img{
  width:100%;
  height:100%;
}
.container-two{
  position:absolute;
  top:442px;
  left:40px;
  width:1840px;
  height:302px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
  border-radius:15px;
}
.container-three{
  position:absolute;
  top:764px;
  left:40px;
  width:1840px;
  height:394px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
  border-radius:15px;
}
.writing-report{
  position:absolute;
  top:29px;
  left:30px;
  font-size:34px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.writing-report-details{
  position:absolute;
  top:92px;
  left:30px;
  width:1780px;
  height:272px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.submit-one{
  position:absolute;
  top:1198px;
  left:1400px;
  width:220px;
  height:70px;
  background:rgba(255,40,40,1);
  border-radius:5px;
  font-size:40px;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:70px;
  text-align:center;
  margin-bottom:30px;
}
.submit-two{
  position:absolute;
  top:1198px;
  left:1660px;
  width:220px;
  height:70px;
  background:rgba(76,198,220,1);
  border-radius:5px;
  font-size:40px;
  font-weight:bold;
  color:rgba(255,255,255,1);
   line-height:70px;
  text-align:center;
  margin-bottom:30px;
}
</style>
