import React from 'react';
import Loader from '../../atom/loader';
import Onboarding from './onboarding';
import Skills from './skills';
import Player from './player';
import propTypes, {ViewNames} from './prop-types';

const AppReview = ({viewName, onboarding, skills, slides: connectSlide, dispatch}) => {
  const connectedSlides = connectSlide(dispatch);

  switch (viewName) {
    case ViewNames.skills:
      return <Skills {...skills} />;
    case ViewNames.onboarding:
      return <Onboarding {...onboarding} />;
    case ViewNames.slides:
      return <Player {...connectedSlides} />;
    default:
      return <Loader />;
  }
};

AppReview.propTypes = propTypes;

export default AppReview;
