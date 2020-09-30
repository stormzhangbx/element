<template>
  <div>
    <el-row>
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="200px">
        <el-table-column
          prop="date"
          label="日期"
          width="180">
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          width="180">
        </el-table-column>
        <el-table-column
          prop="address"
          label="地址"
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          label="操作"
          width="120"
        >
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row>
      <el-table
        :data="tableData"
        style="width: 100%"
        max-height="200px"
      >
        <!-- <el-table-column v-for="item in headers" :key="item.prop" :label="item.label" :prop="item.prop"></el-table-column> -->
        <el-table-column
          label="操作"
          width="120"
          fixed="right"
        >
          <template slot-scope="scope">
            <el-button
              @click.native.prevent="deleteRow(scope.$index, tableData)"
              type="text"
              size="small">
              移除
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>

    <el-row>
      <Merge></Merge>
    </el-row>
  </div>
</template>

<script>
import Merge from '@/views/data/table/Merge'

export default {
  name: 'Table',
  components: {
    Merge
  },
  data () {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      headers: [
        { label: '日期', prop: 'date' },
        { label: '姓名', prop: 'name' },
        { label: '地址', prop: 'address' }
      ]
    }
  },
  methods: {
    deleteRow (index, data) {
      console.log(index)
      console.log(data)
    }
  }
}
</script>

<style>
  .el-row {
    margin-bottom: 20px;
  }
  .el-table .el-table__header-wrapper th,
  .el-table .el-table__fixed-header-wrapper th{
    word-break: break-word;
    background-color: #f8f8f9;
    color: #515a6e;
    height: 40px;
    font-size: 13px;
  }
</style>
