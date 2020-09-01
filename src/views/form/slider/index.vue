<template>
  <div>
    <el-row>
      <el-slider
        v-model="value"
        :format-tooltip="formatTooltip"
      ></el-slider>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Slider',
  data () {
    return {
      value: 10
    }
  },
  methods: {
    formatTooltip (value) {
      return value / 100
    }
  }
}
</script>

<style scoped>

</style>
