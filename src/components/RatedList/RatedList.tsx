import { Spin } from 'antd';
import filmAPI from '../../services/filmService';
import ErrorTag from '../Error/ErrorTag';
import Card from '../Card/Card';
import classes from './RatedList.module.scss';
import { useAppSelector } from '../../hooks/redux';

interface RatedListProps {
	guestId: string;
	currPage: number;
	setTotalPages: (pages: number) => void;
}

function RatedList({ guestId, currPage, setTotalPages }: RatedListProps) {
	const {
		data: rated,
		error,
		isLoading,
	} = filmAPI.useGetRatedQuery({ guestId, currPage });
	if (rated) setTotalPages(rated.total_pages);

	const films = useAppSelector((state) => state.rateFilmSlice);
	return (
		<div className={classes.main}>
			{error && <ErrorTag error={error} />}
			{isLoading && !error && <Spin />}
			{!isLoading &&
				films &&
				films.map((item) => (
					<Card
						stars={item.rate}
						guestId={guestId}
						key={item.id}
						id={item.id}
						date={item.date}
						text={item.text}
						genres={item.genres}
						title={item.title}
						url={item.img}
						average={item.average}
						movieId={item.id}
					/>
				))}
		</div>
	);
}

export default RatedList;
