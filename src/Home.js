import HistoryShort from './HistoryShort';
import Favorites from './Favorites';
import HeaderHome from './HeaderHome';

function Home() {
  return (
    <div>
      <HeaderHome />
      <HistoryShort />
      <Favorites />
    </div>
  );
}

export default Home;
