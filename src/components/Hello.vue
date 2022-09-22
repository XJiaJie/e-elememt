<template>
  <div>
    <h2 @click="get">你好,vue</h2>
  </div>
</template>

<script>
import axios from 'axios';
  export default {
    name:'Hello',
    methods:{
      get(){
        axios.get('./../static/post.json').then(res=>{
          console.log(res.data)
        },err=>{
          console.log(err)
        })
      }
    }
  }
</script>
<style lang='' scoped>

</style>