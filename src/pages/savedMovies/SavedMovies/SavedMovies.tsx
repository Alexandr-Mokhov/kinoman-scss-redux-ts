/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchForm from '../../../components/SearchForm/SearchForm';
import MoviesCardList from '../../../components/MoviesCardList/MoviesCardList';
import filterMovies from '../../../utils/filterMovies';
import { setNotFoundMovies } from '../../../store/features/notMoviesSlice';
import { SHORT_FILMS_DURATION } from '../../../constans';
import type { RootState } from '../../../../types';
import type { MoviesListType } from '../../../../types';

export default function SavedMovies() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [foundSavedMovies, setFoundSavedMovies] = useState<MoviesListType[]>([]);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [checkedShortSaved, setCheckedShortSaved] = useState(false);
  const dispatch = useDispatch();
  const savedFilms = useSelector((state: RootState) => state.favorite.savedFilms);

  useEffect(() => {
    if (foundSavedMovies[0]) {
      handleVisibledFilms(checkedShortSaved);
    } else {
      setFoundSavedMovies(savedFilms);
    }
  }, [savedFilms])

  useEffect(() => {
    foundSavedMovies.length === 0 ?
    dispatch(setNotFoundMovies(true)) :
    dispatch(setNotFoundMovies(false));
  }, [foundSavedMovies, checkedShortSaved])

  function handleChange(evt: ChangeEvent<HTMLInputElement>): void {    
    setValue(evt.target.value);
    if (evt.target.value === '') {
      setIsValid(false);
      setButtonDisabled(true);
      if (checkedShortSaved) {
        setFoundSavedMovies(savedFilms.filter((movie: MoviesListType) => movie.duration < SHORT_FILMS_DURATION));
      } else {
        setFoundSavedMovies(savedFilms);
      }
    } else {
      setIsValid(true);
      setButtonDisabled(false);
    }
  }

  function handleVisibledFilms(checked: boolean): void {
    if (checked) {
      setFoundSavedMovies(filterMovies(savedFilms, value, true));
    } else {
      setFoundSavedMovies(filterMovies(savedFilms, value, false));
    }
  }

  function handleChecked() {
    setCheckedShortSaved(!checkedShortSaved);
    handleVisibledFilms(!checkedShortSaved);
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();
    handleVisibledFilms(checkedShortSaved);
  }

  return (
    <main className="saved-movies" aria-label="Сохранённые фильмы">
      <SearchForm
        value={value}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        isValid={isValid}
        buttonDisabled={buttonDisabled}
        checkedShortSaved={checkedShortSaved}
        handleChecked={handleChecked}
        checkedShort
      />
      <MoviesCardList
        foundSavedMovies={foundSavedMovies}
        foundMovies={[]}
        shortFilms={[]}
      />
    </main>
  )
}
