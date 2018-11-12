<template>
 <div>
   <ul>
     <li v-for="(message, index) in messages" :key="message.id">
       <router-link :to="`/home/Message/detail/${message.id}`">{{message.title}}</router-link>
       <button @click="pushShow(message.id)">push</button>
       <button @click="replaceShow(message.id)">replace</button>
     </li>
   </ul>
   <button @click="$router.back()">返回</button>
   <hr>
   <hr>
   <router-view/>
 </div>
</template>

<script>
  export default {
    data(){
      return{
        messages:[]
      }
    },
    mounted(){
      setTimeout(()=>{
    const messages=[
      {id:1, title:'message01'},
      {id:3, title:'message03'},
      {id:5, title:'message05'},
    ]
        this.messages=messages
      },1000)
        },
    methods:{
      pushShow(id){
        this.$router.push(`/home/Message/detail/${id}`)
      },
      replaceShow(id){
        this.$router.replace(`/home/Message/detail/${id}`)
      },
    }
  }
</script>

<style>

</style>
