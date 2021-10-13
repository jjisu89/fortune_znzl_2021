import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  state = {
    movies: [{
      id: 1,
      title: '포춘쿠키 칼로리는',
      summary: '378.1kcal',
      poster: 'https://image.freepik.com/free-photo/fortune-cookie_144627-21540.jpg'
    }],
  };
  render() {
    const { movies } = this.state;
    return (
      <section className="container">
        <div className="movies">
            {movies.map((movie) => {
              return (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.poster}
                />
              );
            })}
         </div>
      </section>
    );
  }
}

export default Home;