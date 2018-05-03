<template>
  <div>
    <router-link to="/" replace>回到首页</router-link>
    <h1>Test Page</h1>
    <div v-for="item in list" :key="item">{{ item }}</div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      list: []
    }
  },
  mounted () {
    fetch('/aaaaaa').then((a) => {
      console.log(a)
      this.list = [1, 2, 3, 4]
    })
  }
}
</script>
