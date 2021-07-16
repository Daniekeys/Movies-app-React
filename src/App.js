import React,{useEffect, useState} from 'react'
import Movie from './components/Movie';

const apikey = '04c35731a5ee918f014970082a0088b1';
const FEATURED_API = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page1';
const IMGAPI = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect( ()=> {

    getMovies(FEATURED_API);
    //  fetch(FEATURED_API).then(res => res.json()).then(data => {
    //   console.log(data); 
    //   setMovies(data.results);
    //  });

   


  }, [])
  const getMovies =(API) => {
    fetch(API).then(res => res.json()).then(data => {
      console.log(data);
      setMovies(data.results);
    });
  }
  const handleSubmit = (e)=> {
    e.preventDefault();
    if (searchTerm) {
      
      getMovies(SEARCH_API+searchTerm);
    //   fetch(SEARCH_API+searchTerm).then(res => res.json()).then(data => {
    //     console.log(data);
    //     setMovies(data.results);
    //   });
    //   setSearchTerm('');
     }
    setSearchTerm('');

  }
  const handleChange =(e) => {
    setSearchTerm(e.target.value);
  }

  return (
    <>
    <header>
      <form  onSubmit={handleSubmit}>

      <input type="text" placeholder="Search" className="search" typeof="search" value={searchTerm} onChange={handleChange}/>
      </form>

    </header>
    <div className="movie-container">
    { movies.length > 0 && movies.map(movie => (
      <Movie key={movie.id} {...movie} />
    ))}
    </div>
    </>
  )
}

export default App
