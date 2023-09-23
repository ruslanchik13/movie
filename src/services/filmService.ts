import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IData, IGenres, IGuest, IRate } from '../types/types';

const headers = {
  Accept: 'application/json',
  Authorization:
    'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2ODk3ZTA4NWZlMGI2ZjI3MGRjMzIyYmY0M2QxNDI1NyIsInN1YiI6IjY1MDYwNDhkNDU3NjVkMDBjNmQzYzQ0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zPexdGMSuUQj5Se0K-ySukHl0oowdYmdRAhMbyDa2Dc',
};

const filmAPI = createApi({
  reducerPath: 'filmAPI',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api.themoviedb.org/3' }),
  tagTypes: ['Post'],
  endpoints: (build) => ({
    getFilms: build.query<IData, { value: string; page: number }>({
      query: ({ value, page }) => ({
        url: '/search/movie',
        params: {
          query: value,
          include_adult: false,
          language: 'en-US',
          page,
        },
        headers,
      }),
    }),
    getGenres: build.query<{ genres: IGenres[] }, {}>({
      query: () => ({
        url: '/genre/movie/list',
        headers,
      }),
    }),
    createGuest: build.query<IGuest, {}>({
      query: () => ({
        url: '/authentication/guest_session/new',
        params: {
          api_key: '6897e085fe0b6f270dc322bf43d14257',
        },
      }),
    }),
    getRated: build.query<IData, { guestId: string; currPage: number }>({
      query: ({ guestId, currPage }) => ({
        url: `/guest_session/${guestId}/rated/movies`,
        params: {
          api_key: '6897e085fe0b6f270dc322bf43d14257',
          sort_by: 'sort_by=created_at.asc',
          page: currPage,
        },
      }),
      providesTags: () => ['Post'],
    }),
    rateFilm: build.mutation<IData, IRate>({
      query: ({ guestId, movieId, rating }) => ({
        method: 'POST',
        url: `/movie/${movieId}/rating`,
        params: {
          guest_session_id: guestId,
          api_key: '6897e085fe0b6f270dc322bf43d14257',
        },
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: { value: rating },
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export default filmAPI;
