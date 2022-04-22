<template>
  <div class="body-giphy">
    <h1>Gifs pequeños</h1>
    <div class="img-container">
      <div class="img-little">
        <img
          v-for="gif of giphLittle" :key="gif.index"
           :src="gif"   
          alt="">
      </div>
      <h1>Gifs medianos</h1>
      <div class="img-medium">
        <img
          v-for="gif of giphMedium" :key="gif.index"
           :src="gif" 
          alt="">
      </div>
      <h1>Gifs grandes</h1>
      <div class="img-big">
        <img
          v-for="gif of giphBig" :key="gif.index"
           :src="gif" 
          alt="">
      </div>
    </div>
  </div>
</template>

<script>
  // import useStore from '@/helpers/stores';
  import getApi from '../helpers/getApi';

  export default {
    name: 'GiphyHome',
      data(){
        return{
          getGiphy: Promise,
          giphy: Object,
          giphLittle: [],
          giphMedium: [],
          giphBig: [],
          searchElement: '',
        };
      },
      methods: {
        async returnGiph (){
          this.getGiphy = await getApi.get("/search",{
            params:{
              q: this.searchElement,
              api_key: "Sg0MObO8eKdoHLtzgwD4kPF4slnSrYsT",
              
            }
          })
          this.giphy = this.getGiphy.data.data

          for (let element of this.giphy) {
            if(parseInt(element.images.original.height) < 200){
              this.giphLittle.push(element.images.original.url)
              
            } 
            else if(parseInt(element.images.original.height) > 200 && parseInt(element.images.original.height) <300 ){
              this.giphMedium.push(element.images.original.url)

            }   
            else if(parseInt(element.images.original.height) > 300){
              this.giphBig.push(element.images.original.url)
            }
          }  

        },
        searchView(){
          this.giphLittle = []
          this.giphMedium = []
          this.giphBig = []
        }
      },
      mounted () {
        this.returnGiph()

      },
      watch:{
        searchElement: function (){
          this.searchView()
          this.returnGiph()
        }
      }
  };
  </script>

<style scoped>
    .body-giphy{
      width: 100%;
      height: 100%;
      background-color: rgb(97, 229, 214);
    }

    h1 {
      color: black;
    }

    .img-little{
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      padding: 5px;
      justify-content: center;
    }

    .img-little img{
      margin: 5px;
    }

    .img-medium{
      display: flex;
      flex-direction: row;
      padding: 5px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .img-medium img{
      margin: 5px;
    }

    .img-big{
      display: flex;
      flex-direction: row;
      padding: 5px;
      justify-content: center;
      flex-wrap: wrap;
    }

    .img-big img{
      margin: 5px;
    }

</style>

