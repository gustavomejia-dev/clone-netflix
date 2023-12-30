import React, { useEffect, useState } from 'react'
import "../Banner/Banner.css";
import categories, { getMovies } from '../../api';
function Banner() {

const [movie, setMovie] = useState({});
console.log(movie); 
const fetchRandomMovie = async () => {
    try{
      //cria um object novo com os objetos que o category name seja igual a netflixOriginals
      const netflixOriginalsCategory = categories.find(
          (category) => category.name === "netflixOriginals")
      const {results}  = await getMovies(netflixOriginalsCategory.path);
      // console.log(results);
      
      const randMovieIndex = Math.floor(Math.random() * results.length);
    
      setMovie(results[randMovieIndex]);
     
    }catch(error) { 
        console.log('Component Banner:' + error)
    }
}

const truncate = (str, n) => str?.length > n ? str.substr(0, n -1) + "..." : str ;
 
    


useEffect(() => {
  fetchRandomMovie();
  


},[])
  return (
    <header className="banner-container"  
   
            style={
                     {
                      
                       backgroundSize:'cover',
                       backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie.backdrop_path
                      }")`,
                       backgroundPosition: 'center-center'
                       
                      }
                  }>
      
      
                <div className='banner-content'>
                    <h1 className='banner-title'>
                      {movie?.title || movie?.name || movie?.original_name}  
                    </h1> 
                    <div className="banner-button-container">
                        <button type='button' className='banner-button'>Assistir</button>
                        <button className='banner-button'>Play</button>
                    </div> 
                    
                    <div className='banner-description'>
                      <h2>{truncate(movie?.overview, 120)}</h2>

                    </div>
                </div> 
        {/* {movie.name} */}
    </header>
  )
}

export default Banner