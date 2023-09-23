import { useState } from 'react';
import { Input, Pagination } from 'antd';
import CardList from '../../components/CardList/CardList';
import classes from './FilmsPage.module.scss';
import filmAPI from '../../services/filmService';

function FilmsPage() {
	const [totalPages, setTotalPages] = useState(1);
	const [currPage, setCurrPage] = useState(1);
	const [value, setValue] = useState('');
	const { data: guest } = filmAPI.useCreateGuestQuery('');

	return (
		<>
			<Input
				className={classes.input}
				placeholder="Type to search..."
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<CardList
				guestId={guest ? guest.guest_session_id : ''}
				value={value}
				currPage={currPage}
				setTotalPages={setTotalPages}
			/>
			<div className={classes.pagination}>
				<Pagination
					className={classes.pag}
					defaultCurrent={1}
					total={totalPages * 10}
					onChange={(page) => setCurrPage(page)}
					showSizeChanger={false}
				/>
			</div>
		</>
	);
}

export default FilmsPage;
