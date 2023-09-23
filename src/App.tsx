import './styles/global.scss';
import { Offline, Online } from 'react-detect-offline';
import Router from './routes/Router';
import CustomTabs from './components/CustomTabs/CustomTabs';

function App() {
  return (
    <div className="app">
      <div className="content">
        <Online>
          <CustomTabs />
          <Router />
        </Online>
        <Offline>Ты оффлайн</Offline>
      </div>
    </div>
  );
}

export default App;
