<template>
  <!-- 一级平台,第一页景区列表 -->
  <div class="scenic-details">
    <div class="container">
      <div class="header">
        <router-link to="/firsthome">
          <div class="return">
            <img src="@/assets/images/return.png" alt>
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
      <div class="details-one">
        <div class="scenic-principle">景区负责人信息</div>
        <div class="principle-name">负责人姓名</div>
        <div class="principle-name-details">xxxxx</div>
        <div class="id-card">身份证号码</div>
        <div class="id-card-details">xxxxxxxx</div>
        <div class="phone-one">联系电话①</div>
        <div class="phone-one-number">xxxxx</div>
        <div class="phone-two">联系电话②</div>
        <div class="phone-two-number">xxxxx</div>
      </div>
      <div class="details-two">
        <div class="location">景区所属乡镇主管部门</div>
        <div class="scenic-location">所属乡镇</div>
        <div class="scenic-location-name">xxxxx</div>
        <div class="location-grop">所属部门</div>
        <div class="location-grop-name">xxxxx</div>
      </div>
      <div class="details-three">
        <div class="scenic-photo">
          <img :src="url" alt="图片无法显示">
        </div>
        <div class="scenic-name">xxxxxxxxx</div>
        <div
          class="scenic-introduce"
        >眉山桂花湖是以亲子互动、儿童娱乐、餐饮服务、花卉观赏为一体的AAA级旅游景区。总占地面积约600亩，水域面积约100亩，离眉山市区主城区约6公里，园区内可观赏牡丹、薰衣草等高端花卉，观赏上百种珍稀鸟类，此外还有拓展训练、垂钓、餐饮、娱乐、住宿等各种休闲娱乐项目，园内将打造现代农业放在首位，将农业生产与休闲观光相融合，有效整合和利用景区各种资源，凸显农业观光特色，是集山地休闲、滨水休闲、餐饮娱乐于一体的生态特色乡村旅游景点</div>
        <router-link to="/scenicdata">
          <div class="read-more">景区基本资料>></div>
        </router-link>
      </div>
      <div class="details-four">
          <div class="photo">
            <img :src="url" alt="图片无法显示">
            <div class="play-path">发现一个好玩儿的地方~眉山花海桂花湖！离眉山岷东新区仅仅5公里城区开车过来只需要20分钟~再也……</div>
          </div>
        <router-link to="/scenicstrategy">
          <div class="read-more">攻略信息管理>></div>
        </router-link>
      </div>
      <div class="details-five">
        <div class="license">营业执照</div>
        <div class="license-photo">
          <img :src="url" alt>
        </div>
        <div class="other-license">其他相关资质</div>
        <div class="other-license-photo">
          <div class="one">
            <img :src="url" alt>
          </div>
          <div class="two">
            <img :src="url" alt>
          </div>
          <div class="three">
            <img :src="url" alt>
          </div>
        </div>
        <router-link to="/scenicdatamanage">
          <div class="read-more">资质资料管理>></div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "sceniclist",
  data() {
    return {};
  },
  methods: {
    flushcom(){
      this.$router.go(-1); 
    },
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
.scenic-details {
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
.header {
  position: absolute;
  width: 1920px;
  height: 308px;
  background: rgba(75, 196, 218, 1);
}
.return > img {
  position: absolute;
  top: 42px;
  left: 57px;
  width: 50px;
  height: 50px;
}
.return > span {
  position: absolute;
  top: 38px;
  left: 91px;
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
.details-one {
  position: absolute;
  top: 120px;
  left: 40px;
  width: 1840px;
  height: 162px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.scenic-principle {
  position: absolute;
  top: 15px;
  left: 49px;
  font-size: 30px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
  line-height: 33px;
  text-align: center;
}
.principle-name {
  position: absolute;
  top: 56px;
  left: 49px;
  width: 122px;
  height: 23px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  text-align: center;
}
.principle-name-details {
  position: absolute;
  top: 56px;
  left: 211px;
  width: 526px;
  height: 45px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 45px;
}
.id-card {
  position: absolute;
  top: 56px;
  left: 818px;
  width: 123px;
  height: 23px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.id-card-details {
  position: absolute;
  top: 56px;
  left: 958px;
  width: 526px;
  height: 45px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 45px;
}
.phone-one {
  position: absolute;
  top: 110px;
  left: 49px;
  width: 122px;
  height: 23px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  text-align: center;
}
.phone-one-number {
  position: absolute;
  top: 110px;
  left: 211px;
  width: 526px;
  height: 45px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 45px;
}
.phone-two {
  position: absolute;
  top: 110px;
  left: 818px;
  width: 123px;
  height: 23px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.phone-two-number {
  position: absolute;
  top: 110px;
  left: 958px;
  width: 526px;
  height: 45px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 45px;
}
.details-two {
  position: absolute;
  top: 302px;
  left: 40px;
  width: 1840px;
  height: 122px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.location {
  position: absolute;
  top: 15px;
  left: 49px;
  font-size: 25px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.scenic-location {
  position: absolute;
  margin-top: 66px;
  margin-left: 49px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.scenic-location-name {
  position: absolute;
  top: 66px;
  left: 211px;
  width: 526px;
  height: 45px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 45px;
}
.location-grop {
  position: absolute;
  top: 66px;
  left: 776px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.location-grop-name {
  position: absolute;
  top: 66px;
  left: 958px;
  width: 526px;
  height: 45px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
  line-height: 45px;
}
.details-three,
.details-four,
.details-five {
  position: absolute;
  top: 444px;
  width: 586px;
  height: 616px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.details-three {
  left: 40px;
}
.scenic-photo {
  position: absolute;
  top: 15px;
  left: 30px;
  width: 526px;
  height: 301px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.scenic-photo > img {
  width: 100%;
  height: 100%;
}
.scenic-name {
  position: absolute;
  top: 340px;
  left: 30px;
  font-size: 40px;
  font-weight: bold;
  color: rgba(53, 53, 53, 1);
}
.scenic-introduce {
  position: absolute;
  top: 400px;
  left: 30px;
  width: 525px;
  height: 125px;
  font-size: 23px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  overflow: hidden;
}
.details-three > a > .read-more {
  position: absolute;
  top: 535px;
  left: 160px;
  font-size: 35px;
  font-weight: 500;
  color: rgba(75, 196, 218, 1);
}
.details-four {
  margin-left: 666px;
}
.photo {
  position: absolute;
  top: 30px;
  left: 30px;
  width: 200px;
  height: 150px;
  background: rgba(229, 229, 229, 1);
  border-radius: 5px;
}
a {
  text-decoration: none;
}
.play-path {
  position: absolute;
  left: 247px;
  width: 309px;
  height: 122px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
  overflow: hidden;
}
.details-four > a > .read-more {
  position: absolute;
  top: 535px;
  left: 160px;
  font-size: 35px;
  font-weight: 500;
  color: rgba(75, 196, 218, 1);
}
.details-five {
  margin-left: 1294px;
}
.license {
  position: absolute;
  top: 30px;
  left: 30px;
  font-size: 30px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.license-photo {
  position: absolute;
  top: 81px;
  left: 30px;
  width: 120px;
  height: 146px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.other-license {
  position: absolute;
  top: 241px;
  left: 29px;
  font-size: 30px;
  font-weight: 500;
  color: rgba(53, 53, 53, 1);
}
.one {
  position: absolute;
  top: 295px;
  left: 30px;
  width: 120px;
  height: 146px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.two {
  position: absolute;
  top: 295px;
  left: 211px;
  width: 120px;
  height: 146px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.three {
  position: absolute;
  top: 295px;
  left: 390px;
  width: 120px;
  height: 146px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.details-five > a > .read-more {
  position: absolute;
  top: 535px;
  left: 160px;
  font-size: 35px;
  font-weight: 500;
  color: rgba(75, 196, 218, 1);
}
</style>