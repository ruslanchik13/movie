import { Tabs, TabsProps } from 'antd';
import { Link } from 'react-router-dom';
import classes from './CustomTabs.module.scss';

const items: TabsProps['items'] = [
  {
    key: '1',
    label: <Link to="/">Search</Link>,
  },
  {
    key: '2',
    label: <Link to="/rated">Rated</Link>,
  },
];

function CustomTabs() {
  return (
    <div className={classes.main}>
      <Tabs defaultActiveKey="1" items={items} />
    </div>
  );
}

export default CustomTabs;
