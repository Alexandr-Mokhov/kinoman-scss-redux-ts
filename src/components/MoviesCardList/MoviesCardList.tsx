import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MoviesCard from '../MoviesCard/MoviesCard';
import type { RootState, MoviesListType } from '../../../types';

type MoviesCardListType = {
  foundMovies: [],
  errorFoundMovies?: boolean,
  startItems?: number,
  shortFilms: [],
  checkedShort?: boolean,
  foundSavedMovies?: MoviesListType[],
}

export default function MoviesCardList({
  foundMovies,
  errorFoundMovies,
  startItems,
  shortFilms,
  checkedShort,
  foundSavedMovies,
}: MoviesCardListType) {
  const { pathname } = useLocation();
  const notFoundMovies = useSelector((state: RootState) => state.notMovies.notFoundMovies);
  const savedFilms = useSelector((state: RootState) => state.favorite.savedFilms);

  function createMovieCard(movie: MoviesListType, id: number) {
    return <MoviesCard
      movie={movie}
      key={id}
    />
  }

  function createMovieList(list: []) {    
    return list.slice(0, startItems).map((movieItem: MoviesListType) => createMovieCard(movieItem, movieItem.id));
  }

  const movieFoundItems = () => {
    return checkedShort ? createMovieList(shortFilms) : createMovieList(foundMovies);
  }

  const movieSavedItems = () => {
    if (savedFilms) {
      return (foundSavedMovies as MoviesListType[]).map((movieItem: MoviesListType) => createMovieCard(movieItem, movieItem.movieId));
    }
  }

  return (
    <section className="movies-list">
      <div className="movies-list__container">
        {pathname === '/movies' ? movieFoundItems() : movieSavedItems()}
      </div>
      {notFoundMovies && <h2 className="movies-list__not-found">Ничего не найдено</h2>}
      {errorFoundMovies && <h3 className="movies-list__error-found">
        Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз.
      </h3>}
    </section>
  )
}
