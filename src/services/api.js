import axios from 'axios';

//https://api.themoviedb.org/3/movie/550?api_key=174ed195a79c743ab1f6a0d2ecd1bb74

export const key = '174ed195a79c743ab1f6a0d2ecd1bb74'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
})

export default api;