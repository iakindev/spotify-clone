import React from 'react';
import { shallow } from 'enzyme';
import NavigationPlaylistListItem from './navigation-playlist-list-item';

it('runs correctly', () => {
  const wrapper = shallow(<NavigationPlaylistListItem text="test" />);
  expect(wrapper).toMatchSnapshot();
});
