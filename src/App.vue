<template>
    <div>
      <NavBar />
  <router-view/>
    </div>
</template>

<script>
  import NavBar from '@/shared/components/NavBar.vue';  

export default {
  data(){
    return{
      dataSearch: null
    }
  },
  components:{
    NavBar,
  }

}
</script>

<style>
body{
  margin: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
