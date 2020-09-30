<template>
  <div>
    <h1>container</h1>
    <el-row>
      <p>{{name}}</p>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Container',
  data () {
    return {
      name: 'Jack',
      info: {
        age: 45,
        children: {
          son: 'Bob'
        }
      }
    }
  },
  watch: {
    name (newVal, oldVal) {
      console.log(newVal)
      console.log(oldVal)
    },
    // name: {
    //   immediate: true,
    //   handler (newVal, oldVal) {
    //     console.log(newVal)
    //     console.log(oldVal)
    //   }
    // },
    info: {
      // deep: true,
      handler (newVal, oldVal) {
        console.log(newVal)
        console.log(oldVal)
      }
    }
  }
}
</script>

<style scoped>

</style>
