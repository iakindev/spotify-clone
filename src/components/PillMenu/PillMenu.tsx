import { useState, useContext, useEffect } from 'react';
import { Menu, MenuItem } from '@material-ui/core';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import styles from './PillMenu.module.scss';
import { ArrowDropDown } from '../icons';
import User from '../../context/User';

interface Props {
  className?: string | undefined;
  Text: string | undefined;
}

const PillMenu: React.FC<Props> = ({ className, Text }) => {
  const [avatar, setAvatar] = useState(undefined);
  const { setUser } = useContext(User);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const history = useHistory();

  const darkTheme = createMuiTheme({
    palette: {
      type: 'dark',
      background: { paper: '#282828' },
    },
  });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = async () => {
    await Axios.post(`${process.env.REACT_APP_BASE_URL}/v1/users/logout`, null, {
      headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
    });
    localStorage.removeItem('__TOKEN');
    setUser?.({});
    history.push('/');
  };

  useEffect(() => {
    const fetchAvatar = async () => {
      const response = await Axios.get(`${process.env.REACT_APP_BASE_URL}/v1/users/my-avatar`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('__TOKEN')}` },
      });
      if (response.data !== '') {
        setAvatar(response.data);
      }
    };

    fetchAvatar();
  }, []);

  return (
    <>
      <button
        className={`${styles['pill-menu']} ${className || ''}`}
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <img
          className={styles.image}
          alt="avatar"
          src={
            avatar
              ? `data:image/png;base64, ${avatar}`
              : `${process.env.REACT_APP_BASE_URL}/assets/images/avatar.png`
          }
        />

        <span className={styles.text}>{Text || ''}</span>
        <ArrowDropDown className={styles['dropdown-icon']} />
      </button>
      <ThemeProvider theme={darkTheme}>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          className={styles['pill-menu-list']}
        >
          <MenuItem component={Link} to="/overview">
            <span className={styles['list-text']}>Account</span>
          </MenuItem>
          <MenuItem onClick={() => handleLogout()}>
            <span className={styles['list-text']}>Logout</span>
          </MenuItem>
        </Menu>
      </ThemeProvider>
    </>
  );
};

export default PillMenu;
