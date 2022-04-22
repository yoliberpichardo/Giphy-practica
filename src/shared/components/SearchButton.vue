<template>
    <div class="search-body">
        <input 
            v-model="searchGif"
         />
        <button @click="agregarSearch">search</button>
    </div>
</template>

<script>
    import useStore from '../../helpers/stores';
    const use = useStore()
        
    export default {
        data(){
            return{
                errors: [],
                searchGif: ''
            }
        },
        methods:{
            agregarSearch(){
                use.searchValue = this.searchGif
                use.viewState()
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