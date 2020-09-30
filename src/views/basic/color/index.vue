<template>
  <div></div>
</template>

<script>
import { getCode } from '@/api/user'

export default {
  name: 'Color',
  mounted () {
    getCode().then(res => {
      console.log('res', res)
    })
  }
}
</script>

<style scoped>

</style>
