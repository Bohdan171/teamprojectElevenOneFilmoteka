import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day'

export default class PopulаrFilms{ 
    constuctor(){
          }
   
       
    
    async  fetch() {
      try {
        const keyapi = '4bceebe1d1f9bc99c966449bdeaecb86';
        const requestparams = `?api_key=${keyapi}`
        const url = BASE_URL + requestparams;
        console.log(url)
        return await axios.get(`${url}`).then(response => response.data);}
    catch (err) {
      console.log(err);
      throw err;
    }
     }
   
    }