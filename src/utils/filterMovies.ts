import { SHORT_FILMS_DURATION } from '../constans';
type MoviesListType = {
  country: string
  created_at: string
  description: string
  director: string
  duration: number
  id: number
  image: {}
  nameEN: string
  nameRU: string
  trailerLink: string
  updated_at: string
  year: string
}

export default function filterMovies(moviesList: MoviesListType[], value: string, short: boolean): MoviesListType[] | null {
  return moviesList.filter(movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()) &&
    (short ? movie.duration < SHORT_FILMS_DURATION : true));
}
