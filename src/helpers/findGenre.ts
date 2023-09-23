import { IGenres } from '../types/types';

const findGenre = (res: IGenres[], ids: number[]) => {
	const resArr: string[] = [];
	if (res) {
		res.forEach((item: IGenres) => {
			if (ids.includes(item.id)) {
				resArr.push(item.name);
			}
		});
	}
	return resArr;
};

export default findGenre;
