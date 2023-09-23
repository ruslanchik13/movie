import { configureStore } from '@reduxjs/toolkit';
import filmAPI from '../services/filmService';
import { reducer } from './reducers/rateFilmsSlice';

const store = configureStore({
	reducer: {
		rateFilmSlice: reducer,
		[filmAPI.reducerPath]: filmAPI.reducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(filmAPI.middleware),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
