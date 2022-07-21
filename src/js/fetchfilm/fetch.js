import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3/search/movie'

export default class NewFilms{ 
    constuctor(){
      this.name = ""  
    }
   
         get query(){
        return this.name
      }
      set query(newQuary){
        this.name = newQuary
      }
    

    async  fetch(page) {
      try {
        const keyapi = '4bceebe1d1f9bc99c966449bdeaecb86';
        const requestparams = `?api_key=${keyapi}&language=en-US&page=${page}&include_adult=false&query=${this.name}`

        const url = BASE_URL + requestparams;
        
        return await axios.get(`${url}`).then(response => response.data);}
    catch (err) {
      console.log(err);
      throw err;
    }

     }
    
    }