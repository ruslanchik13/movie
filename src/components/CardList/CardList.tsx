import { Spin } from 'antd';
import Card from '../Card/Card';
import classes from './CardList.module.scss';
import filmAPI from '../../services/filmService';
import ErrorTag from '../Error/ErrorTag';

interface CardListProps {
	setTotalPages: (total_pages: number) => void;
	currPage: number;
	value?: string;
	guestId: string;
}

function CardList({
	setTotalPages,
	currPage,
	value = '',
	guestId,
}: CardListProps) {
	const { data, error, isLoading } = filmAPI.useGetFilmsQuery({
		value,
		page: currPage,
	});
	if (data) setTotalPages(data.total_pages);

	return (
		<div className={classes.main}>
			{error && <ErrorTag error={error} />}
			{isLoading && !error && <Spin />}
			{!isLoading &&
				data &&
				data.results.map((item) => (
					<Card
						guestId={guestId}
						key={item.id}
						id={item.id}
						date={item.release_date}
						text={item.overview}
						genres={item.genre_ids}
						title={item.original_title}
						url={item.poster_path}
						average={item.vote_average}
						movieId={item.id}
					/>
				))}
		</div>
	);
}

export default CardList;
