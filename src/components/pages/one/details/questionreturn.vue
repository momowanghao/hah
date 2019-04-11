<template>
<!--一级平台,问卷反馈,问卷详情-->
  <div class="question-list">
    <div class="container">
      <div class="header">
        <router-link to="/firsthomefive">
          <div class="return">
            <img src="@/assets/images/return.png" alt>
            <span>返回</span>
          </div>
        </router-link>
        <div class="geli"></div>
        <div class="title">文卷详情</div>
        <div class="user-name">东坡文旅</div>
        <div class="user-position">区管理员</div>
        <div class="quit">
          <el-button type="text" @click="open7">
            <img src="@/assets/images/quit.png" alt="该图无法显示">
          </el-button>
        </div>
      </div>
      <div class="manage-container">
        <div class="manage-header">
          <span class="manage-name">问卷列表</span>
          <span class="question-all">全部</span>
          <span class="question-one">|</span>
          <span class="question-next">二级监管</span>
          <span class="question-two">|</span>
          <span class="question-scenic">景区</span>
          <span class="search">
            <input type="text" placeholder="请输入内容">
          </span>
        </div>
        <div class="manage-title">
          <span>问卷名称</span>
          <span>问卷上传时间</span>
          <span>问卷上传者</span>
          <span>问卷详情</span>
        </div>
        <div class="manage-one">
          <div class="manage-part" v-for="item in list" :key="item.id">
            <span>{{item.name}}</span>
            <span>{{item.position}}</span>
            <span>{{item.position}}</span>
            <span>问卷下载</span>
          </div>
        </div>
      </div>
      <div class="page">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
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
.question-list{
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
.manage-container{
  position:absolute;
  top:121px;
  left:40px;
  width:1840px;
  height:781px;
  background:rgba(255,255,255,1);
  box-shadow:0px 0px 20px 0px rgba(6,0,1,0.1);
  border-radius:15px;
}
.manage-header{
  position:absolute;
  top:0;
  left:0;
  width:1840px;
  height:110px;
  background:rgba(65,84,103,1);
  border-radius:15px 15px 0px 0px;
}
.manage-name{
  position:absolute;
  top:33px;
  left:48px;
  font-size:40px;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.question-all{
  position:absolute;
  top:40px;
  left:357px;
  font-size:30px;
  font-weight:400;
  color:rgba(76,198,220,1);
}
.question-one,.question-two{
  position:absolute;
  top:47px;
  left:442px;
  width:1px;
  height:28px;
  background:rgba(255,255,255,1);
}
.question-next,.question-scenic{
  position:absolute;
  top:40px;
  left:462px;
  font-size:30px;
  font-weight:400;
  color:rgba(255,255,255,1);
}
.question-two{
  left:607px;
}
.question-scenic{
  left:627px;
}
.search{
  position:absolute;
  top:36px;
  left:1472px;
}
.search>input{
  width:305px;
  height:40px;
  background:rgba(246,247,251,1);
  border-radius:5px;
}
.manage-title {
  position: absolute;
  top: 109px;
  width:1840px;
  height:60px;
  background:rgba(246,247,251,1);
  box-shadow:0px 0px 10px 0px rgba(6,0,1,0.2);
}
.manage-one {
  position: absolute;
  top: 170px;
  width:1840px;
  height: 670px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 0px 0px 15px 15px;
}
.manage-title > span:nth-child(1),
.manage-part > span:nth-child(1) {
  width: 493px;
  /* border-left:1px solid rgb(224, 15, 95);  */
}
.manage-title > span:nth-child(2),
.manage-part > span:nth-child(2) {
  width: 553px;
  margin-left: 493px;
  border-left: 1px solid rgb(173, 172, 172);
}
.manage-title > span:nth-child(3),
.manage-part > span:nth-child(3) {
  width: 453px;
  margin-left: 973px;
  border-left: 1px solid rgb(173, 172, 172);
}
.manage-title > span:nth-child(4),
.manage-part >span:nth-child(4) {
  width: 412px;
  margin-left: 1427px;
  border-left: 1px solid rgb(173, 172, 172);
  text-align: center;
}
.manage-title > span {
  line-height: 60px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(183, 191, 206, 1);
  position: absolute;
  text-align: center;
}
.manage-part>span {
  height: 60px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  position: absolute;
  text-align: center;
  line-height: 60px;
  overflow: hidden;
}
.manage-part {
  width: 1840px;
  height: 60px;
  border-bottom: 1px solid rgba(183, 191, 206, 1);
}
.manage-part > span:nth-child(4){
  cursor: pointer;
}
.manage-part >span:nth-child(4) {
  color: #ffbe00;
}
.page {
  position: absolute;
  top: 996px;
  left: 1100px;
}
</style>
