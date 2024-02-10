import { SHORT_FILMS_DURATION } from '../constans';
import type { MoviesListType } from '../../types';

export default function filterMovies(moviesList: MoviesListType[], value: string, short: boolean): MoviesListType[] {
  return moviesList.filter(movie => movie.nameRU.toLowerCase().includes(value.toLowerCase()) &&
    (short ? movie.duration < SHORT_FILMS_DURATION : true));
}
