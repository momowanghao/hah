<template>
<!--一级平台I,我的消息,消息详情-->
  <div class="news-list">
    <div class="container">
      <div class="header">
        <router-link to="/firsthomeseven">
          <div class="return">
            <img src="@/assets/images/return.png" alt>
            <span>返回</span>
          </div>
        </router-link>
        <div class="geli"></div>
        <div class="title">消息详情</div>
        <div class="user-name">东坡文旅</div>
        <div class="user-position">区管理员</div>
        <div class="quit">
          <el-button type="text" @click="open7">
            <img src="@/assets/images/quit.png" alt="该图无法显示">
          </el-button>
        </div>
      </div>
      <div class="container-one">
          <div class="news-title">消息标题</div>
          <div class="news-date">{{news-date}}</div>
          <div class="news-own">{{news-own}}</div>
          <div class="news-details">bbbbb{{details}}</div>
      </div>
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
  height:916px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
  border-radius:15px;
}
.news-title{
  position:absolute;
  top:57px;
  left:71px;
  font-size:60px;
  font-weight:bold;
  color:rgba(77,77,77,1);
}
.news-date{
  position:absolute;
  top:137px;
  left:70px;
  font-size:25px;
  font-weight:500;
  color:rgba(77,77,77,1);
}
.news-own{
  position:absolute;
  top:170px;
  left:70px;
  font-size:25px;
  font-weight:500;
  color:rgba(77,77,77,1);
}
.news-details{
  position:absolute;
  top:260px;
  left:70px;
  width:1680px;
  height:657px;
  font-size:30px;
  font-weight:500;
  color:rgba(77,77,77,1);
}
</style>
