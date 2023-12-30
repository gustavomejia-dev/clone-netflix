import axios from "axios";

const API_KEY = "d375d76bb1c341953897be5e729f037e";
export const imageHost = "https://image.tmdb.org/t/p/w500";
const categories = [
    {
      name: "trending",
      title: "Em alta",
      path: `/trending/all/week?api_key=${API_KEY}&language=pt-BR`,
      isLarge: true,
    },
    {
      name: "netflixOriginals",
      title: "Originais Netflix",
      path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
      // isLarge: false,
    },
    {
      name: "topRated",
      title: "Populares",
      path: `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`,
      // isLarge: false,
    },
    {
      name: "comedy",
      title: "Comédias",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
      // isLarge: false,
    },
    {
      name: "romances",
      title: "Romances",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
      // isLarge: false,
    },
    {
      name: "documentaries",
      title: "Documentários",
      path: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
      // isLarge: false,
    },
  ];
  export const config = {
    headers:{
        'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
    }
  }
  export const apiUrl = axios.create(
    {
        baseURL: "https://api.themoviedb.org/3",
    }
  );
  export const getMovies = async (path) => {
    try {
    const result = await apiUrl.get(path, config);
    // console.log(result.data);
    // 
    // console.log("https://api.themoviedb.org/3" + path);
    //   let url = `https://api.themoviedb.org/3${path}`;
    //   const response = await fetch(url);
      return result.data;
    } catch (error) {
      console.log("error getMovies: ", error);
    }
  };
  
  export default categories;