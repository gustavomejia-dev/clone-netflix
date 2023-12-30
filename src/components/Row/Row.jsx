import React, { useEffect, useState } from 'react'
import { getMovies, imageHost } from '../../api';
import '../Row/Row.css'
function Row({title, path, isLarge = false}) {
    
    // console.log('path: ' + path)
    const [movies, setMovies] = useState([]);
    const fetchMovies = async (_path) => {
        try{
            const data = await getMovies(_path);
         
            setMovies(data.results);
        }catch (error) {
            console.log(error)
        }
    } 
    // console.log(typeof(movies))
    useEffect(() => {
        // console.log(path);
       fetchMovies(path);
       
        // return () => {

        // }
    }, [path]);
  return (
    <div className='row-container'>
          {/* <h2>oii</h2> */}
           <h2 className='row-header'>{title}</h2> 
           <div className='row-cards'>
            {/* {console.log(typeof(movies))} */}
               {movies.map((movie, index) => {
                    // console.log(movie.id);
                 
                    return <img className={`movie-card ${isLarge && 'movie-card-large'}`}
                                key={index} 
                                // src={`${imageHost}${movie.poster_path}`} 
                                src={`${imageHost}${
                                    isLarge ? movie.backdrop_path : movie.poster_path}`}
                                alt={movie.name}>
                            
                             </img> 
               })}

           </div>

    </div>
  )
}

export default Row