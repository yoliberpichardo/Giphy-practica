import { defineStore } from 'pinia'

const useStore = defineStore('storeId', {
 state: () => {
    return{
        searchValue: '' as string
    }
 },
 actions:{
    viewState: function(){
        console.log(this.searchValue)
    }
 }
})

export default useStore