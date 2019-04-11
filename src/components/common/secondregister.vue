<template>
  <!--二级平台注册-->
  <div class="second-register">
    <div class="container">
      <div class="header">
        <div class="title">自主注册申报</div>
      </div>
      <div class="container-one">
        <div class="cover-photo">社会信用代码</div>
        <div class="choice-photo">选择图片</div>
        <div class="photo-position">
          <img src alt id="photos">
        </div>
        <div class="photo-size">
          <div>上传景区封面图</div>
          <div>支持2MB以内的JPG、JPGE、PNG图片</div>
        </div>
      </div>
      <div class="container-two">
        <div class="position-name">单位名称</div>
        <div class="position-name-details">
          <input type="text" placeholder="请输入单位名称">
        </div>
      </div>
      <div class="contianer-three">
        <div class="specific-position-name">具体负责部门名称</div>
        <div class="specific-position-details">
          <input type="text" placeholder="请输入负责部门名称">
        </div>
      </div>
      <div class="container-four">
        <div class="scenic-principle">景区负责人信息</div>
        <div class="principle-name">负责人姓名</div>
        <div class="principle-name-details">
          <input type="text" placeholder="请输入负责人">
        </div>
        <div class="id-card">身份证号码</div>
        <div class="id-card-details">
          <input type="text" placeholder="请输入身份证号码">
        </div>
        <div class="phone-one">联系电话①</div>
        <div class="phone-one-number">
          <input type="text" placeholder="请输入电话号码">
        </div>
      </div>
      <div class="container-five">
        <div class="scenic-part-principle">分管领导人信息</div>
        <div class="principle-part-name">负责人姓名</div>
        <div class="principle-part-name-details">
          <input type="text" placeholder="请输入负责人姓名">
        </div>
        <div class="part-id-card">身份证号码</div>
        <div class="part-id-card-details">
          <input type="text" placeholder="请输入身份证号码">
        </div>
        <div class="part-phone-one">联系电话①</div>
        <div class="part-phone-one-number">
          <input type="text" placeholder="请输入电话号码">
        </div>
      </div>
      <div class="button-one">上传审核</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "secondregister",
  data() {
    return {};
  }
};
</script>
<style lang="" scoped>
.second-register {
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
  height: 714px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 0px 20px 0px rgba(6, 0, 1, 0.1);
  border-radius: 15px;
}
.cover-photo {
  position: absolute;
  top:40px;
  left:70px;
  font-size: 34px;
  font-weight: bold;
  color: rgba(77, 77, 77, 1);
}
.choice-photo {
  position: absolute;
  top: 119px;
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
.photo-position {
  position: absolute;
  top: 119px;
  left: 601px;
  width: 859px;
  height: 501px;
  background: rgba(229, 229, 229, 1);
  border-radius: 15px;
}
.photo-position > img {
  width: 100%;
  height: 100%;
}
.photo-size {
  position: absolute;
  top: 200px;
  left: 38px;
  width: 416px;
  height: 61px;
  font-size: 22px;
  font-weight: 500;
  color: rgba(77, 77, 77, 1);
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
.contianer-three {
  left: 970px;
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
}
.position-name-details > input,
.specific-position-details > input {
  width: 849px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
  line-height: 50px;
  border: 0;
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
}
.principle-name-details > input,
.principle-part-name-details > input {
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  line-height: 50px;
  border: 0;
   font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
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
}
.id-card-details > input,
.part-id-card-details > input {
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  line-height: 50px;
  border: 0;
   font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
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
}
.phone-one-number > input,
.part-phone-one-number > input {
  width: 526px;
  height: 50px;
  background: rgba(246, 247, 251, 1);
  border-radius: 5px;
  line-height: 50px;
  border: 0;
   font-size: 24px;
  font-weight: 500;
  color: rgba(184, 192, 207, 1);
}
.button-one {
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
  margin-bottom: 30px;
}
</style>
