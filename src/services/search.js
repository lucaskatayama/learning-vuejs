import axios from 'axios';
import moment from 'moment';

class MovieSearchItem {
  constructor(data) {
    this.id = data.id;
    this.Plot = data.overview;
    this.Title = data.original_title;
    this.Year = '';
    if (data.release_date) {
      const date = moment(data.release_date);
      this.Year = date.year();
    }
    this.Poster = 'static/no-poster.jpg';
    if (data.poster_path) {
      this.Poster = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
    }
  }
}


class Movie extends MovieSearchItem {
  constructor(data) {
    super(data);
    this.Popularity = data.popularity;
    this.imdbID = data.imdb_id;
    this.Homepage = data.homepage;
    this.Genres = data.genres.map(e => e.name).join(', ');
    this.Runtime = `${data.runtime}m`;
    this.Rate = data.vote_average;
  }

  addVideos(videos) {
    this.Videos = videos;
  }
}

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'fb6358d4d51bf152d9fd43969fa48dda',
  },
});


export async function search(query) {
  const resp = await instance.get('/search/movie', { params: { query } });
  return resp.data.results.map(e => new MovieSearchItem(e));
}

export async function info(id) {
  const resp = await instance.get(`/movie/${id}`);
  const videos = await instance.get(`/movie/${id}/videos`);
  const movie = new Movie(resp.data);
  movie.addVideos(videos.data.results);
  return movie;
}
