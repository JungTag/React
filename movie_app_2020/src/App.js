import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component {
  state = {
    isLoding: true,
    movies: [],
  }
  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoding: false });
  }
  componentDidMount() {
    this.getMovies();
  }
  render() {
    const { isLoding, movies } = this.state;
    return (
      <section class="container">
        {isLoding ? (
          <div class="loader">
            <span class="loader__texdt">"Loding..."</span>
          </div>
        ) : (
            <div>
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id}
                  year={movie.year}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                />
              ))}
            </div>
          )}
      </section>
    );
  }
}

export default App;
