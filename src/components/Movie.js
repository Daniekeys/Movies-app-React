import React from 'react'
const IMGAPI = 'https://image.tmdb.org/t/p/w1280';

const setVoteClass = (vote) => {
  if (vote >= 8) {
    return 'green';

  }
  else if (vote >= 6) {
    return 'orange';
  }
  else{
    return 'red';
  }
}

const Movie = ({title, poster_path, overview, vote_average }) => {
 return (
  <div className="movie">
  <div className="movie-header">
  
       <img src={poster_path ? (IMGAPI + poster_path) : 'https://res.cloudinary.com/www-daniekeys-com/image/upload/v1605271608/sample.jpg'} alt={title} className="movie-img" />
  </div>
  <div className="movie-info">
  <h3>{title}</h3>
  <span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
 <div className="movie-over">
 <h2>Overview:</h2>
 <p> {overview} </p>
 </div>
  </div>
  </div>
 )
}

export default Movie
