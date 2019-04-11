<template>
  <!-- 二级平台的主页--消息列表-->
  <div class="news-home">
    <div class="container">
      <div class="nav-left">
        <div class="logo-img">
          <img src="@/assets/images/logo.png" alt="图片无法显示">
        </div>
        <div class="nav-list">
          <router-link to="/secondhome">
            <div class="d1">景区列表</div>
          </router-link>
          <router-link to="/secondhometwo">
            <div class="d1">景区入驻审核</div>
          </router-link>
          <router-link to="/secondhomethree">
            <div class="d1">日常资料更新审核</div>
          </router-link>
          <router-link to="/secondhomefour">
            <div class="d1">问卷反馈</div>
          </router-link>
          <router-link to="/secondhomefive">
            <div class="d1">每月巡查</div>
          </router-link>
          <router-link to="/secondhomesix">
            <div class="d1 active">
              我的消息
              <div class="d2"></div>
            </div>
          </router-link>
        </div>
      </div>
      <div class="header">
        <div class="title">东坡区全域旅游监管平台</div>
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
          <span class="manage-name">消息列表</span>
          <span class="search">
            <input type="text" placeholder="请输入内容">
          </span>
        </div>
        <div class="manage-title">
          <span>标题</span>
          <span>发布时间</span>
          <span>发布者</span>
        </div>
        <div class="manage-one">
          <div class="manage-part" v-for="item in scenicList" :key="item.id">
            <router-link to="/newslist">
              <span>{{item.name}}</span>
            </router-link>
            <span>{{item.position}}</span>
            <span>查看详情</span>
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
      <router-link to="/publicnews">
        <div class="publish">发表</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      newsNumber: "",
      scenicList: [
        { id: 0, name: "花海·桂花湖", position: "东坡区复盛乡xxxxxxxxx" }
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
<style lang="" scoped>
.news-home {
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
a {
  text-decoration: none;
}
.nav-left {
  position: absolute;
  left: 0;
  top: 0;
  width: 300px;
  height: 1080px;
  background: rgba(67, 76, 85, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.2);
  font-size: 24px;
  font-weight: 400;
}
.logo-img {
  position: absolute;
  left: 57px;
  top: 48px;
}
.nav-list {
  position: absolute;
  top: 308px;
}
.d1 {
  width: 300px;
  height: 100px;
  font-size: 24px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 100px;
  text-align: center;
  cursor: pointer;
}
.d2 {
  margin-top: -70px;
  margin-left: 284px;
  width: 6px;
  height: 44px;
  background: rgba(76, 198, 220, 1);
  border-radius: 3px;
}
.active {
  background: rgba(80, 101, 122, 1);
}
.d3 {
  margin-top: -54px;
  margin-left: 230px;
  width: 15px;
  height: 15px;
  background: rgb(250, 2, 2);
  border-radius: 50%;
}
.header {
  position: absolute;
  left: 300px;
  width: 1620px;
  height: 308px;
  background: rgba(76, 198, 220, 1);
}
.title {
  position: absolute;
  left: 42px;
  top: 26px;
  width: 686px;
  height: 57px;
  font-size: 60px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.user-name {
  position: absolute;
  left: 1123px;
  top: 46px;
  width: 123px;
  height: 28px;
  font-size: 30px;
  font-weight: 500;
  color: rgba(255, 255, 255, 1);
}
.user-position {
  position: absolute;
  left: 1262px;
  top: 54px;
  width: 113px;
  height: 26px;
  background: rgba(255, 190, 0, 1);
  border-radius: 13px;
  font-size: 20px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  text-align: center;
  line-height: 26px;
}
.quit {
  position: absolute;
  left: 1543px;
  top: 47px;
  width: 30px;
  height: 31px;
}
.manage-container {
  position: absolute;
  top: 120px;
  left: 340px;
  width: 1540px;
  height: 840px;
}
.manage-header {
  position: absolute;
  width: 1540px;
  height: 110px;
  background: rgba(65, 84, 103, 1);
  border-radius: 15px 15px 0px 0px;
}
.manage-name {
  position: absolute;
  top: 32px;
  left: 48px;
  height: 40px;
  font-size: 40px;
  font-weight: 400;
  color: rgba(255, 255, 255, 1);
  line-height: 40px;
  text-align: center;
}
.search {
  position: absolute;
  top: 34px;
  left: 1171px;
}
.search > input {
  width: 305px;
  height: 40px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 17px;
  font-weight: 400;
  color: rgba(184, 192, 207, 1);
}
.manage-title {
  position: absolute;
  top: 110px;
  width: 1540px;
  height: 60px;
  background: rgba(246, 247, 251, 1);
  box-shadow: 0px 0px 10px 0px rgba(6, 0, 1, 0.2);
}
.manage-one {
  position: absolute;
  top: 170px;
  width: 1540px;
  height: 670px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 0px 0px 15px 15px;
}
.manage-title > span:nth-child(1),
.manage-part > a > span {
  width: 392px;
  /* border-left:1px solid rgb(224, 15, 95);  */
}
.manage-title > span:nth-child(2),
.manage-part > span:nth-child(2) {
  width: 665px;
  margin-left: 392px;
  border-left: 1px solid rgb(173, 172, 172);
}
.manage-title > span:nth-child(3),
.manage-part > span:nth-child(3) {
  width: 482px;
  margin-left: 1058px;
  border-left: 1px solid rgb(173, 172, 172);
}
.manage-title > span {
  line-height: 60px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(183, 191, 206, 1);
  position: absolute;
  text-align: center;
}
.manage-part span {
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
  width: 1540px;
  height: 60px;
  border-bottom: 1px solid rgba(183, 191, 206, 1);
}
.manage-part > a > span,
.manage-part > span:last-child {
  cursor: pointer;
}
.manage-part > a > span {
  color: #4cc6dc;
}
.page {
  position: absolute;
  top: 996px;
  left: 1100px;
}
.special {
  color: #4cc6dc;
}
.publish {
  position: absolute;
  top: 996px;
  left: 340px;
  width: 220px;
  height: 70px;
  background: rgba(76, 198, 220, 1);
  border-radius: 5px;
  line-height: 70px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
</style>

