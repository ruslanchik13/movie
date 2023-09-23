import { useState } from 'react';
import { Pagination } from 'antd';
import filmAPI from '../../services/filmService';
import RatedList from '../../components/RatedList/RatedList';
import classes from './RatedPage.module.scss';

function RatedPage() {
  const [totalPages, setTotalPages] = useState(1);
  const [currPage, setCurrPage] = useState(1);

  const { data: guest } = filmAPI.useCreateGuestQuery('');

  return (
    <>
      <RatedList currPage={currPage} guestId={guest ? guest.guest_session_id : ''} setTotalPages={setTotalPages} />
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

export default RatedPage;
