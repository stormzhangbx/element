<template>
  <div>
    <h2>边框</h2>
    <h3>圆角</h3>
    <div>
      <el-row>
        <el-col :span="6">
          <div class="title">小圆角</div>
          <div class="value">border-radius: 2px</div>
          <div class="radius" style="border-radius: 2px;"></div>
        </el-col>
        <el-col :span="6">
          <div class="title">大圆角</div>
          <div class="value">border-radius: 4px</div>
          <div class="radius" style="border-radius: 4px;"></div>
        </el-col>
        <el-col :span="6">
          <div class="title">圆型圆角</div>
          <div class="value">border-radius: 30px</div>
          <div class="radius" style="border-radius: 30px;"></div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Border'
}
</script>

<style scoped>
  .title {
    color: #666;
    font-size: 18px;
    margin: 10px 0;
  }
  .value {
    color: #333;
    font-size: 16px;
    margin: 10px 0;
  }
  .radius {
    width: 70%;
    height: 60px;
    margin-top: 20px;
    border: 1px solid #d7dae2;
  }
</style>
