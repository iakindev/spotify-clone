import React, { useState } from 'react';
import '../styles/App.scss';
import '../styles/Player.scss';
import Navbar from '../components/Navbar/Navbar';
import Nowplaying from '../components/Nowplaying/Nowplaying';
import Topbar from '../components/Topbar/Topbar';
import Main from '../components/Main/Main';
import CurrentSong from '../context/CurrentSong';
import Volume from '../context/Volume';
import PlayingStatus from '../context/PlayingStatus';
import PlayerScreen from '../context/PlayerScreen';
import Search from '../components/Search/Search';

const Player = () => {
  document.title = 'Spotify';
  const [currentSong, setCurrentSong] = useState({});
  const [playing, setPlaying] = useState(false);
  const [currentScreen, setCurrentScreen] = useState<'Home' | 'Search' | 'Library'>('Home');

  const initialVolume = () => {
    const volume = localStorage.getItem('VOLUME');
    if (volume !== null) {
      return parseFloat(volume);
    }
    return 1;
  };
  const [volume, setVolume] = useState(initialVolume());

  return (
    <PlayerScreen.Provider value={{ currentScreen, setCurrentScreen }}>
      <CurrentSong.Provider value={{ currentSong, setCurrentSong }}>
        <PlayingStatus.Provider value={{ playing, setPlaying }}>
          <Volume.Provider value={{ volume, setVolume }}>
            <div className="main-container">
              <div className="nav-content">
                <Navbar />
                <div className="topbar-main">
                  <Topbar />
                  {/* TODO: use React Router */}
                  {currentScreen === 'Home' && <Main />}
                  {currentScreen === 'Search' && <Search />}
                </div>
              </div>
              <Nowplaying />
            </div>
          </Volume.Provider>
        </PlayingStatus.Provider>
      </CurrentSong.Provider>
    </PlayerScreen.Provider>
  );
};

export default Player;
