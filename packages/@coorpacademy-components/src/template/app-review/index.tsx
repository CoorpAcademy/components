import React from 'react';
import Loader from '../../atom/loader';
import Player from './player';
import propTypes, {AppReviewProps} from './prop-types';

const AppReview = ({viewName, slides}: AppReviewProps) => {
  switch (viewName) {
    case 'slides':
      return <Player {...slides} />;
    default:
      return <Loader />;
  }
};

AppReview.propTypes = propTypes;

export default AppReview;
