<template>
  <div>
    <el-row>
      <el-date-picker
        v-model="value1"
        type="date"
        placeholder="选择日期"
        format="yyyy年MM月dd日"
        value-format="yyyy/MM/dd"
        readonly
      ></el-date-picker>

      <el-date-picker
        v-model="value2"
        align="right"
        type="date"
        placeholder="选择日期"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
    </el-row>
    <div class="box">
      <div class="container">
        <div class="block">
          <span>年</span>
          <el-date-picker
            type="year"
            v-model="year"
          ></el-date-picker>
        </div>
        <div class="block">
          <span>月</span>
          <el-date-picker
            type="month"
            v-model="month"
          ></el-date-picker>
        </div>
      </div>
      <div class="container">
        <div class="block">
          <span>日</span>
          <el-date-picker
            type="date"
            v-model="date"
          ></el-date-picker>
        </div>
        <div class="block">
          <span>周</span>
          <el-date-picker
            type="week"
            v-model="week"
          ></el-date-picker>
        </div>
      </div>
    </div>
    <el-row>
      <el-date-picker
        type="daterange"
        v-model="dataRange"
        unlink-panels
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['00:00:00', '23:59:59']"
      ></el-date-picker>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'DatePicker',
  data () {
    return {
      value1: '2020-08-25',
      value2: '',
      pickerOptions: {
        // disabledDate (date) {
        //   return date.getTime() > Date.now()
        // },
        shortcuts: [
          {
            text: '今天',
            onClick (picker) {
              picker.$emit('pick', new Date())
            }
          },
          {
            text: '明天',
            onClick (picker) {
              const d = new Date()
              d.setTime(d.getTime() + 24 * 3600 * 1000)
              picker.$emit('pick', d)
            }
          }
        ]
      },
      year: '',
      month: '',
      date: '',
      week: '',
      dataRange: []
    }
  }
}
</script>

<style scoped lang="less">
  .el-row {
    margin-bottom: 20px;
  }
  .box {
    display: flex;

    .container {
      flex: 1;
      border-right: 1px solid red;

      &:last-child {
        border-right: none;
      }

      .block {
        padding: 30px 0;
        border-bottom: 1px solid red;
        text-align: center;

        &:last-child {
          border-bottom: none;
        }

        &>span {
          display: block;
          color: #8492a6;
          font-size: 14px;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
