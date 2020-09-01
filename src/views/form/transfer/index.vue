<template>
  <div>
    <el-row>
      <el-transfer
        v-model="value"
        :data="data"
      ></el-transfer>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Transfer',
  data () {
    return {
      data: [
        {
          key: 0,
          label: 'Jack'
        },
        {
          key: 1,
          label: 'Marry'
        },
        {
          key: 2,
          label: 'Tom'
        },
        {
          key: 3,
          label: 'Bob'
        },
        {
          key: 4,
          label: 'Hellen'
        }
      ],
      value: []
    }
  }
}
</script>

<style scoped>

</style>
