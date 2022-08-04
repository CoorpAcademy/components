import React from 'react';
import Loader from '../../atom/loader';
import Onboarding from './onboarding';
import Skills from './skills';
import Slides from './slides';
import propTypes, {ViewNames} from './prop-types';

// -----------------------------------------------------------------------------

const AppReview = ({viewName, onboarding, skills, slides, ...dispatchers}) => {
  switch (viewName) {
    case ViewNames.skills:
      return <Skills {...skills} {...dispatchers} />;
    case ViewNames.onboarding:
      return <Onboarding {...onboarding} {...dispatchers} />;
    case ViewNames.slides:
      return <Slides {...slides} {...dispatchers} />;
    default:
      return <Loader />;
  }
};

AppReview.propTypes = propTypes;

// -----------------------------------------------------------------------------

export default AppReview;
