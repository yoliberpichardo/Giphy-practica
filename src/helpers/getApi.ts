import axios from 'axios';

const getApi = axios.create({
    baseURL: `https://api.giphy.com/v1/gifs`
})


export default getApi;
