import React from 'react';
import ReviewDashboardSkills from '../review-dashboard-skills';
import SlidesReview from '../slides-review';
import propTypes from './prop-types';
import {ViewNames} from './common';

// -----------------------------------------------------------------------------

const RootView = ({viewName, onboarding, slidesReview}) => {
  switch (viewName) {
    case ViewNames.home:
    case ViewNames.onboarding: {
      return <ReviewDashboardSkills {...onboarding} />;
    }
    case ViewNames.slides: {
      return <SlidesReview {...slidesReview} />;
    }
  }
};

RootView.propTypes = propTypes;

// -----------------------------------------------------------------------------

export default RootView;
