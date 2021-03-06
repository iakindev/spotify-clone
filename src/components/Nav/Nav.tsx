import { useHistory } from 'react-router-dom';
import styles from './Nav.module.scss';
import NavButton from '../NavButton/NavButton';
import { HomeActive, Search, Library, Home, SearchActive, LibraryActive } from '../icons';

interface Props {
  bottom?: boolean;
}

const Nav: React.FC<Props> = ({ bottom }) => {
  const history = useHistory();

  return (
    <div className={`${styles['navigation-menu']} ${bottom ? styles['bottom-menu'] : ''}`}>
      <NavButton
        Icon={history.location.pathname === '/player/home' ? HomeActive : Home}
        text="Home"
        onClick={() => history.push('/player/home')}
        active={history.location.pathname === '/player/home'}
      />
      <NavButton
        Icon={history.location.pathname === '/player/search' ? SearchActive : Search}
        text="Search"
        onClick={() => history.push('/player/search')}
        active={history.location.pathname === '/player/search'}
      />
      <NavButton
        Icon={history.location.pathname === '/player/library' ? LibraryActive : Library}
        text="Library"
        active={history.location.pathname === '/player/location'}
      />
    </div>
  );
};

export default Nav;
