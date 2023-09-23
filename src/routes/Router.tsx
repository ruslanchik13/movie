import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import FilmsPage from '../pages/FilmsPage/FilmsPage';
import RatedPage from '../pages/RatedPage/RatedPage';

function Router() {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/');
	}, []);

	return (
		<Routes>
			<Route path="/" element={<FilmsPage />} />
			<Route path="/rated" element={<RatedPage />} />
		</Routes>
	);
}

export default Router;
