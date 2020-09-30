<template>
  <el-table
    :data="tableData"
    :span-method="arraySpanMethod"
    border
    style="width: 100%"
  >
    <el-table-column
      prop="id"
      label="ID"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名">
    </el-table-column>
    <el-table-column
      prop="amount1"
      sortable
      label="数值 1">
    </el-table-column>
    <el-table-column
      prop="amount2"
      sortable
      label="数值 2">
    </el-table-column>
    <el-table-column
      prop="amount3"
      sortable
      label="数值 3">
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'Merge',
  data () {
    return {
      tableData: [
        { id: '1', name: '小虎1', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '2', name: '小虎2', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '3', name: '小虎3', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '4', name: '小虎4', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '5', name: '小虎5', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '6', name: '小虎6', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '7', name: '小虎7', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '8', name: '小虎8', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '9', name: '小虎9', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '10', name: '小虎10', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '11', name: '小虎11', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '12', name: '小虎12', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '13', name: '小虎13', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '14', name: '小虎14', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '15', name: '小虎15', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '16', name: '小虎16', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '17', name: '小虎17', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '18', name: '小虎18', amount1: '234', amount2: '3.2', amount3: 10 },
        { id: '19', name: '小虎19', amount1: '234', amount2: '3.2', amount3: 10 }
      ]
    }
  },
  methods: {
    arraySpanMethod ({ row, column, rowIndex, columnIndex }) {
      const arr1 = [11, 4, 4]
      const arr2 = [5, 3, 3, 4, 4]
      // console.log(1, row)
      // console.log(2, column)
      // console.log(rowIndex, columnIndex)

      // if (columnIndex === 0) {
      //   if (rowIndex === 0) {
      //     return [11, 1]
      //   } else if (rowIndex === 11) {
      //     return [4, 1]
      //   } else if (rowIndex === 15) {
      //     return [4, 1]
      //   } else {
      //     return [0, 0]
      //   }
      // } else if (columnIndex === 1) {
      //   if (rowIndex === 0) {
      //     return [5, 1]
      //   } else if (rowIndex === 5) {
      //     return [3, 1]
      //   } else if (rowIndex === 8) {
      //     return [3, 1]
      //   } else if (rowIndex === 11) {
      //     return [4, 1]
      //   } else if (rowIndex === 15) {
      //     return [4, 1]
      //   } else {
      //     return [0, 0]
      //   }
      // }

      // let res = [1, 1]
      // if (columnIndex === 0) {
      //   arr1.reduce((acc, item) => {
      //     // console.log('acc', acc)
      //     if (rowIndex === acc) {
      //       console.log([item, 1])
      //       res = [item, 1]
      //       this.fn(res)
      //     } else {
      //       res = [0, 0]
      //     }
      //     return acc + item
      //   }, 0)
      //   console.log(rowIndex, columnIndex, res)
      //   return res
      // } else if (columnIndex === 1) {
      // //  TODO
      // }

      if (columnIndex === 0) {
        let res = [1, 1]
        let sum = 0
        for (let i = 0; i < arr1.length; i++) {
          if (rowIndex === sum) {
            console.log(1111)
            sum += arr1[i]
            // res = [arr1[i], 1]
            return [arr1[i], 1]
            // continue
          } else {
            res = [0, 0]
          }
        }
        console.log([rowIndex, columnIndex, res])
        // return res
      }
    }
  }
}
</script>

<style scoped>

</style>
