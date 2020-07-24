import React from 'react';
import TopbarNavBtn from './topbar-nav-btn';

export default {
  title: 'Topbar Nav Button',
};

export const topbarNavBtn = () => {
  return (
    <div style={{ height: 300, position: 'relative' }}>
      <TopbarNavBtn direction="left" />
      <TopbarNavBtn direction="right" />
    </div>
  );
};
