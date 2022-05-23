const API_KEY = "10923b261ba94d897ac6b81148314a3f";
const BASE_PATH = "https://api.themoviedb.org/3";

interface IGetGenre {
  id: number;
  name: string;
};

interface IMovie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  overview: string;
  original_language: string;
  genre_ids: [];
};

export interface IGetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
};

export function getMovies() {
  return fetch(`${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`).then(
    (response) => response.json()
  );
};

export function getMovieGenres() {
  return fetch(`${BASE_PATH}/genre/movie/list?api_key=${API_KEY}&language=en-US`).then(
    (response) => response.json()
  );
}
