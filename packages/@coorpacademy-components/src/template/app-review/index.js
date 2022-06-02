import React from 'react';
import Onboarding from './onboarding';
import Skills from './skills';
import Slides from './slides';
import propTypes, {ViewNames} from './prop-types';

// -----------------------------------------------------------------------------

const AppReview = ({viewName, onboarding, skills, slides, ...dispachers}) => {
  switch (viewName) {
    case ViewNames.skills:
      return <Skills {...skills} {...dispachers} />;
    case ViewNames.onboarding:
      return <Onboarding {...onboarding} {...dispachers} />;
    case ViewNames.slides:
      return <Slides {...slides} {...dispachers} />;
  }
};

AppReview.propTypes = propTypes;

// -----------------------------------------------------------------------------

export default AppReview;
