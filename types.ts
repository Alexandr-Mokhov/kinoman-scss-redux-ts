export type MoviesListType = {
  country: string,
  created_at: string,
  description: string,
  director: string,
  duration: number,
  id?: number,
  image: { url?: string | undefined },
  nameEN: string,
  nameRU: string,
  trailerLink: string,
  updated_at: string,
  year: string,
  _id?: string,
	owner?: string,
	thumbnail?: string,
	movieId?: number,
}

export type RootState = {
  error: { errorText: string },
  favorite: { savedFilms: [] },
  loading: { isLoading: boolean },
  logged: { loggedIn: boolean },
  notMovies: { notFoundMovies: boolean },
  tooltip: { infoTooltipOpen: boolean, infoTooltipMessage: string },
  user: { name: string, email: string, ownerId: string },
};

export type OptionType = {
  method: string,
  headers: { 'Content-Type': string },
  body?: BodyInit | null | undefined,
}

export type UserDataType = {
  name?: string,
  email?: string,
  password?: string,
}

export type ResponseUserDataType = {
  name: string,
  email: string,
  _id: string,
  status: string | never,
}