<template>
    <!-- <p v-if="errors">{{errors[0]}}</p> -->
    <div class="search-body">
        <input 
            v-model="searchGif"
         />
        <button @click="agregarSearch">search</button>
    </div>
</template>

<script>
// import buscar from '@/assets/buscar.png'
// import Search from '@/shared/components/NavBar.vue';
export default {
    data(){
        return{
            errors: [],
            searchElement: [],
            searchGif: ''
        }
    },
    methods:{
        agregarSearch(){
            this.searchElement.push(this.searchGif)
            console.log(this.searchElement);
            return this.$emit('searchEmit', this.searchGif)
        },
        checkSearch(){
            this.searchGif != '' ? this.agregarSearch() : this.errors.push('palabra requerida')
            
        },
        clearData(){
            this.errors = []
            this.searchGif = ''
        }

    }
}
</script>

<style scoped>
    .search-body{
        display: flex;
        flex-direction: row;
    }
</style>