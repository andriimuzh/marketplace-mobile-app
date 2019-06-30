import React from 'react';
import { BottomTabBar } from 'react-navigation-tabs';
import { compose, withHandlers } from 'recompose';
import T from 'prop-types';
import { NavigationService } from '../../services';
import s from '../styles';

function CustomTabBar({ customJumpToIndex, ...props }) {
  return (
    <BottomTabBar
      style={s.tabBar}
      {...props}
      onTabPress={customJumpToIndex}

    />
  );
}

CustomTabBar.propTypes = {
  customJumpToIndex: T.func,
};

CustomTabBar.defaultProps = {
  customJumpToIndex: () => {},
};

const enhancer = compose(
  withHandlers({
    customJumpToIndex: (props) => (route) => {
      if (route.route.key === 'CreateItemTab') {
        NavigationService.navigateToNewItem();
      } else {
        props.jumpTo(route.route.key);
      }
    },
  }),
);

export default enhancer(CustomTabBar);
