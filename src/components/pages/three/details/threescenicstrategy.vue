<template>
  <!-- 一级平台,景区列表,景区详情, 攻略详情-->
  <div class="scenic-strategy">
    <div class="container">
      <div class="header">
        <!-- <router-link to="/scenicdetails"> -->
        <!-- <router-link to="/"> -->
        <div class="return" @click="go">
          <img src="@/assets/images/return.png" alt>
          <span>返回</span>
        </div>
        <!-- </router-link> -->
        <div class="geli"></div>
        <div class="title">攻略信息管理</div>
        <div class="user-name">东坡文旅</div>
        <div class="user-position">区管理员</div>
        <div class="quit">
          <el-button type="text" @click="open7">
            <img src="@/assets/images/quit.png" alt="该图无法显示">
          </el-button>
        </div>
      </div>
      <!-- 读取信息循环产生读取的攻略 -->
      <div class="container-one">
        <div class="scenic-strategy" v-for="item in list" :key="item.id">
          <div class="scenic-photo">
            <img :src="item.url" alt>
          </div>
          <div class="scenic-startegy-title">{{item.title}}</div>
          <div class="scenic-startegy-details">{{item.massage}}</div>
          <router-link to="/">
            <div class="scenic-edit" @click="edit">编辑</div>
          </router-link>
          <div class="scenic-delete">
            <el-button type="text" @click="open7">删除</el-button>
          </div>
        </div>
      </div>
      <router-link to="/publicstrategy">
      <div class="public">发布攻略</div>
      </router-link>
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
  name: "scenicstrategy",
  data() {
    return {
      list: [
        {
          id: 0,
          url: "require",
          title: "xxxxxxxxxxxxx",
          massage:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        {
          id: 1,
          url: "require",
          title: "xxxxxxxxxxxxx",
          massage:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        {
          id: 2,
          url: "require",
          title: "xxxxxxxxxxxxx",
          massage:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        },
        {
          id: 3,
          url: "require",
          title: "xxxxxxxxxxxxx",
          massage:
            "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
        }
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
.scenic-strategy {
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
div.container-one > div.scenic-strategy:nth-child(1),
div.container-one > div.scenic-strategy:nth-child(2),
div.container-one > div.scenic-strategy:nth-child(3),
div.container-one > div.scenic-strategy:nth-child(4) {
  position: absolute;
  top: 120px;
  left: 40px;
  width: 430px;
  height: 806px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
div.container-one > div.scenic-strategy:nth-child(2) {
  left: 510px;
}
div.container-one > div.scenic-strategy:nth-child(3) {
  left: 980px;
}
div.container-one > div.scenic-strategy:nth-child(4) {
  left: 1450px;
}
.scenic-photo {
  position: absolute;
  width: 430px;
  height: 316px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px 15px 0px 0px;
}
.scenic-photo > img {
  width: 100%;
  height: 100%;
}
.scenic-startegy-title {
  position: absolute;
  top: 344px;
  width: 430px;
  font-size: 30px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 30px;
  text-align: center;
}
.scenic-startegy-details {
  position: absolute;
  top: 405px;
  left: 30px;
  width: 368px;
  height: 300px;
  font-size: 20px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  overflow: hidden;
}
.scenic-edit {
  position: absolute;
  top: 755px;
  left: 87px;
  font-size: 30px;
  font-weight: 500;
  color: rgba(75, 196, 218, 1);
}
.scenic-delete > button {
  position: absolute;
  top: 755px;
  left: 282px;
  font-size: 30px;
  font-weight: 500;
  color: rgba(255, 40, 40, 1);
  border: 0;
}
.page {
  position: absolute;
  top: 996px;
  left: 1100px;
}
.public{
  position:absolute;
  top:966px;
  left:40px;
  width:220px;
  height:70px;
  background:rgba(76,198,220,1);
  border-radius:5px;
  font-size:40px;
  font-weight:bold;
  color:rgba(255,255,255,1);
  line-height:70px;
  text-align:center;
}
</style>