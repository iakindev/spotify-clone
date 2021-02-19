import '../styles/App.scss';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';
import styles from '../styles/Player.module.scss';
import Navbar from '../components/Navbar/Navbar';
import Nowplaying from '../containers/Nowplaying/Nowplaying';
import Topbar from '../components/Topbar/Topbar';
import Main from '../containers/Main/Main';
import CombinedProvider from '../components/CombinedProvider/CombinedProvider';
import Search from '../containers/Search/Search';
import ViewPlaylist from '../containers/ViewPlaylist/ViewPlaylist';
import LikedSongs from '../components/LikedSongs/LikedSongs';

const Player: React.FC = () => {
  document.title = 'Spotify';

  const match = useRouteMatch();

  return (
    <CombinedProvider>
      <div className={styles['main-container']}>
        <div className={styles['nav-content']}>
          <Navbar />
          <div className={styles['topbar-main']}>
            <Topbar />
            <Switch>
              <Route path={`${match.path}/home`}>
                <Main />
              </Route>
              <Route path={`${match.path}/search`}>
                <Search />
              </Route>
              <Route path={`${match.path}/playlist`}>
                <ViewPlaylist />
              </Route>
              <Route path={`${match.path}/liked-songs`}>
                <LikedSongs />
              </Route>
              <Route path={`${match.path}/`}>
                <Redirect to={`${match.url}/home`} />
              </Route>
            </Switch>
          </div>
        </div>
        <Nowplaying />
      </div>
    </CombinedProvider>
  );
};

export default Player;
