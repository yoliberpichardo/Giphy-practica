import router from '../../router/router';
<template>
<div class="body-nav">
  <nav>
    <router-link to="/">Home</router-link> 
    <router-link to="/about">About</router-link>
  </nav>
  <SearchButton
    @search-emit="searchView('element',searchElement)"
  />
</div>
</template>

<script>
  import SearchButton from '@/shared/components/SearchButton.vue';

  export default {
    name:'Navbar',
    components: {
      SearchButton
    },
    methods:{
      searchView(element, send){
        console.log('llego el mensaje',element,send)
      }
    },
  }
</script>

<style scoped>
nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0.6rem;
}

nav a.router-link-exact-active {
  color: #42b983;
}

.body-nav{
  width: 70%;
  padding: 3rem 1rem 0 1rem;
  display: flex;
  margin: 0 auto;
  justify-content: space-between;
}
</style>
