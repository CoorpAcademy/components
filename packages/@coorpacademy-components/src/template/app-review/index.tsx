import React from 'react';
import Loader from '../../atom/loader';
import Onboarding from './onboarding';
import Skills from './skills';
import Player from './player';
import propTypes, {AppReviewProps} from './prop-types';
import { ReviewPlayerProps } from './player/prop-types';

const AppReview = (props: AppReviewProps) => {
  const {viewName, onboarding, skills, slides} = props;
  switch (viewName) {
    case 'skills':
      return <Skills {...skills} title="@todo plug web skills | title is required" />;
    case 'onboarding':
      return <Onboarding {...onboarding} />;
    case 'slides':
      const _slides = slides as ReviewPlayerProps;
      return <Player {..._slides} />;
    default:
      return <Loader />;
  }
};

AppReview.propTypes = propTypes;

export default AppReview;
