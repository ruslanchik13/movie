export interface IFilms {
  overview: string;
  id: number;
  original_title: string;
  poster_path: string;
  release_date: string;
  genre_ids: number[];
  vote_average: number;
}

export interface IGenres {
  id: number;
  name: string;
}

export interface IData {
  page: number;
  results: IFilms[];
  total_pages: number;
}

export interface IGuest {
  guest_session_id: string;
}

export interface IRate {
  guestId: string;
  movieId: number;
  rating: number;
}
