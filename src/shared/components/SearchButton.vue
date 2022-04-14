<template>
    <div class="search-body">
        <input 
            v-model="searchGif"
         />
        <button @click="agregarSearch">search</button>
    </div>
</template>

<script>
export default {
    emits:['searchproduct'],
    data(){
        return{
            errors: [],
            searchGif: ''
        }
    },
    methods:{
        agregarSearch(){
            this.$emit('searchproduct', this.searchGif)
            this.clearData()
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