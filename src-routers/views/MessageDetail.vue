<template>
  <ul>
    <li>id:{{$route.params.id}}</li>
    <li>title:{{messageDetail.title}}</li>
    <li>content:{{messageDetail.content}}</li>
  </ul>
</template>

<script>
  const allMessageDetail=[
    {id:1, title:'message01',content:'message content 0001'},
    {id:3, title:'message03',content:'message content 0003'},
    {id:5, title:'message05',content:'message content 0005'},
  ]
  export default {
    data(){
      return{
        messageDetail:{}
      }
    },
    mounted(){
      this.showUI(this.$route);
    },
    watch:{
      $route(value){
        this.showUI(value);
      }
    },
    methods:{
      showUI(value){
        const id=value.params.id*1;
        const messageDetail=allMessageDetail.find(md=>md.id===id);
        this.messageDetail=messageDetail;
      }
    }
//   computed:{
//     messageDetail(){
//       const id=this.$route.params.id*1;
//       return allMessageDetail.find(md=>md.id===id)
//     }
//   }
  }
</script>

<style>

</style>
