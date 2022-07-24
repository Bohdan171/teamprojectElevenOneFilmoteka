import axios from 'axios';
const genreKey = "genre"

export   const  fetchGenre = async () =>{
     
        try{
    const keyapi = '4bceebe1d1f9bc99c966449bdeaecb86';
    const url = `https://api.themoviedb.org/3/genre/movie/list?api_key=${keyapi}&language=en-US`
    
    return await axios.get(`${url}`).then(response => response.data)
    .then(data => {
        
        return data
      })
      .then(data => localStorage.setItem("genre", JSON.stringify(data)))
      
      }
    catch (err) {
      console.log(err);
      throw err;
    }
   
}

       
    
