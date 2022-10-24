import React from 'react';
import Loader from '../../atom/loader';
import Onboarding from './onboarding';
import Skills from './skills';
import Player from './player';
import propTypes, {AppReviewProps} from './prop-types';

const AppReview = ({viewName, onboarding, skills, slides}: AppReviewProps) => {
  switch (viewName) {
    case 'skills':
      return <Skills {...skills} />;
    case 'onboarding':
      return <Onboarding {...onboarding} />;
    case 'slides':
      return <Player {...slides} />;
    default:
      return <Loader />;
  }
};

AppReview.propTypes = propTypes;

export default AppReview;
