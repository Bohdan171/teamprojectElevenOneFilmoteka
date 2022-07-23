import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/trending/all/day'

export default class PopulаrFilms{ 
    constuctor(){
          }
   
       
    
  async fetch(parametr) {
   let page = parametr;
      try {
        const keyapi = '4bceebe1d1f9bc99c966449bdeaecb86';
        const requestparams = `?api_key=${keyapi}&page=${page}`
        const url = BASE_URL + requestparams;
        console.log(url)
        return await axios.get(`${url}`).then(response => {
          let result = response.data;
          console.log(result);
          return result;
          

        });
      }
    catch (err) {
      console.log(err);
      throw err;
    }
     }
   
    }