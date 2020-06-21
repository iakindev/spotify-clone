import React from 'react';
import NowplayingCenter from './nowplaying-center';

export default {
  title: 'Nowplaying Center',
};

export const nowplayingCenter = () => {
  return (
    <div style={{ position: 'relative', top: 40 }}>
      <NowplayingCenter currentTime="0:00" totalTime="0:00" />
    </div>
  );
};