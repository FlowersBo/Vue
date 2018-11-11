<template>
  <div >
    <h2 v-if="!repoName">Loading...</h2>
    <h3 v-else>
      most star repo is
      <a :href="repoUrl">{{repoName}}</a>
    </h3>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data(){
  return{
    repoName:'',
    repoUrl:''
  }
},
   async mounted(){//ajax请求 异步操作
     /*this.$http.get('https://api.github.com/search/repositories?q=v&sort=stars')
        .then(response=>{
          const result=response.data
          const mostRepo=result.items[0]
          this.repoName= mostRepo.name
          this.repoUrl= mostRepo.html_url
        })
        .catch(response=>{
          alert('网络出错')
        })*/
     const url='https://api.github.com/search/repositories?q=v&sort=stars';
    /*  axios.get(url)
        .then(response=>{
          const result=response.data
          const mostRepo=result.items[0]
          this.repoName= mostRepo.name
          this.repoUrl= mostRepo.html_url
          console.log(result);
        })
        .catch(response=>{
          alert('网络出错')
        })*/
    const response=await axios.get(url)
    }
  }
</script>

<style>

</style>
