import { useEffect, useState } from 'react';
import { Rate, Tag } from 'antd';
import moment from 'moment';
import classes from './Card.module.scss';
import findGenre from '../../helpers/findGenre';
import colorAverage from '../../helpers/colorAverage';
import filmAPI from '../../services/filmService';
import { useAppDispatch } from '../../hooks/redux';
import { rateFilmsSlice } from '../../store/reducers/rateFilmsSlice';

interface CardProps {
	title: string;
	date: string;
	genres: number[];
	text: string;
	id: number;
	url: string;
	average: number;
	movieId: number;
	guestId: string;
	stars?: number;
}

function Card({
	title,
	date,
	genres,
	text,
	url,
	average,
	movieId,
	guestId,
	id,
	stars,
}: CardProps) {
	const { data } = filmAPI.useGetGenresQuery('');
	const [rateFilm] = filmAPI.useRateFilmMutation();

	const [genre, setGenre] = useState<string[]>([]);
	const [value, setValue] = useState(0);

	const { writeFilm } = rateFilmsSlice.actions;
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (data) setGenre(findGenre(data.genres, genres));
	}, [data, genres]);

	const rate = async (filmRating: number) => {
		await rateFilm({ guestId, movieId, rating: value });
		dispatch(
			writeFilm({
				rate: filmRating,
				id,
				genres,
				text,
				title,
				average,
				img: url,
				date,
			})
		);
		setValue(value);
	};

	return (
		<div className={classes.main}>
			<div className={classes.img}>
				<img
					className={classes.image}
					src={
						url
							? `https://image.tmdb.org/t/p/original${url}`
							: 'https://legrand-24.ru/upload/iblock/8b0/id_114593.1.jpg'
					}
					alt=""
				/>
			</div>
			<div className={classes.info}>
				<div className={classes.container}>
					<div className={classes.header}>
						<div className={classes.title}>{title}</div>
						<div
							className={classes.rating}
							style={{ border: `2px solid ${colorAverage(average)}` }}
						>
							{Math.round(average * 10) / 10}
						</div>
					</div>
					<div className={classes.date}>{moment(date).format('LL')}</div>
					<div className={classes.genres}>
						{genre.map((item: string, index) =>
							index < 3 ? (
								<Tag className={classes.tag} key={item}>
									{item}
								</Tag>
							) : (
								''
							)
						)}
					</div>
					<div className={classes.text}>
						{text.split(' ').slice(0, 15).join(' ')}...
					</div>
					<Rate
						value={stars || value}
						allowHalf
						className={classes.ant_rate}
						count={10}
						onChange={(rating) => rate(rating)}
					/>
				</div>
			</div>
		</div>
	);
}

export default Card;
