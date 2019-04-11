<template>
  <!-- 一级平台,二级平台审核,申报资料 -->
  <div class="declare-data">
    <div class="container">
      <div class="header">
        <router-link to="/firsthometwo">
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
        <div class="social-credit-number">社会信用代码</div>
        <div class="social-credit-photo">
          <img src="url" alt>
        </div>
      </div>
      <div class="container-two">
        <div class="position-name">单位名称</div>
        <div class="position-name-details">{{position-name-details}}</div>
      </div>
      <div class="contianer-three">
        <div class="specific-position-name">具体负责部门名称</div>
        <div class="specific-position-details">{{specific-position-details}}</div>
      </div>
      <div class="container-four">
        <div class="scenic-principle">景区负责人信息</div>
        <div class="principle-name">负责人姓名</div>
        <div class="principle-name-details">{{principle-name-details}}</div>
        <div class="id-card">身份证号码</div>
        <div class="id-card-details">{{id-card-details}}</div>
        <div class="phone-one">联系电话①</div>
        <div class="phone-one-number">{{phone-one-number}}</div>
      </div>
      <div class="container-five">
        <div class="scenic-part-principle">分管领导信息</div>
        <div class="principle-part-name">负责人姓名</div>
        <div class="principle-part-name-details">{{principle-part-name-details}}</div>
        <div class="part-id-card">身份证号码</div>
        <div class="part-id-card-details">{{part-id-card-details}}</div>
        <div class="part-phone-one">联系电话①</div>
        <div class="part-phone-one-number">{{part-phone-one-number}}</div>
      </div>
      <div class="button-one">驳回</div>
      <div class="button-two">通过审核</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "declaredata",
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
.declare-data {
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
  height: 714px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.social-credit-number {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.social-credit-photo {
  position: absolute;
  top: 119px;
  left: 31px;
  width: 859px;
  height: 501px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.social-credit-photo > img {
  width: 100%;
  height: 100%;
}
.container-two,
.contianer-three {
  position: absolute;
  top: 854px;
  left: 40px;
  width: 910px;
  height: 172px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.position-name,
.specific-position-name {
  position: absolute;
  top: 29px;
  left: 30px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.position-name-details,
.specific-position-details {
  position: absolute;
  top: 92px;
  left: 31px;
  width: 849px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.contianer-three {
  left: 970px;
}
.container-four,
.container-five {
  position: absolute;
  top: 1046px;
  left: 40px;
  width: 1840px;
  height: 252px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.container-five {
  top: 1318px;
}
.scenic-principle,
.scenic-part-principle {
  position: absolute;
  top: 29px;
  left: 31px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.principle-name,
.principle-part-name {
  position: absolute;
  top: 106px;
  left: 31px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.principle-name-details,
.principle-part-name-details {
  position: absolute;
  top: 92px;
  left: 171px;
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.id-card,
.part-id-card {
  position: absolute;
  top: 106px;
  left: 778px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.id-card-details,
.part-id-card-details {
  position: absolute;
  top: 92px;
  left: 918px;
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.phone-one,
.part-phone-one {
  position: absolute;
  top: 185px;
  left: 30px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.phone-one-number,
.part-phone-one-number {
  position: absolute;
  top: 172px;
  left: 171px;
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
}
.button-one {
  position: absolute;
  top: 1610px;
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
.button-two {
  position: absolute;
  top: 1610px;
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