import React from 'react';
import Loader from '../../atom/loader';
import Onboarding from './onboarding';
import Skills from './skills';
import Player from './player';
import propTypes, {AppReviewProps} from './prop-types';

const AppReview = (props: AppReviewProps) => {
  const {viewName} = props;
  switch (viewName) {
    case 'skills': {
      const {skills} = props;
      return <Skills {...skills} title="@todo plug web skills | title is required" />;
    }
    case 'onboarding': {
      const {onboarding} = props;
      return <Onboarding {...onboarding} />;
    }
    case 'slides': {
      const {slides} = props;
      return <Player {...slides} />;
    }
    default:
      return <Loader />;
  }
};

AppReview.propTypes = propTypes;

export default AppReview;
