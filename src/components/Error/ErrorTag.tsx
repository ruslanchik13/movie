import { Alert } from 'antd';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { SerializedError } from '@reduxjs/toolkit';
import classes from '../CardList/CardList.module.scss';

function ErrorTag({
	error,
}: {
	error: FetchBaseQueryError | SerializedError | undefined;
}) {
	return (
		<div>
			{error ? (
				<Alert
					className={classes.alert}
					message="Loading error"
					description="Апи жителей россии не уважает"
					type="error"
					closable
				/>
			) : (
				''
			)}
		</div>
	);
}

export default ErrorTag;
