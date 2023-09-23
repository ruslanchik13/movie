import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IAction {
	id: number;
	rate: number;
	title: string;
	genres: number[];
	text: string;
	img: string;
	average: number;
	date: string;
}

const initialState: IAction[] = [];

export const rateFilmsSlice = createSlice({
	name: 'rate',
	initialState,
	reducers: {
		writeFilm(state, action: PayloadAction<IAction>) {
			const index = state.findIndex((item) => item.id === action.payload.id);
			if (index !== -1) {
				// eslint-disable-next-line no-param-reassign
				state[index].rate = action.payload.rate;
			} else state.push(action.payload);
		},
	},
});

export const { actions, reducer } = rateFilmsSlice;
