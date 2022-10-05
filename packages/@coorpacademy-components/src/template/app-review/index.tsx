import React from 'react';
import Loader from '../../atom/loader';
import Onboarding from './onboarding';
import Skills from './skills';
import Player from './player';
import propTypes, {Props} from './prop-types';

const AppReview = ({viewName, onboarding, skills, slides}: Props) => {
  switch (viewName) {
    case 'skills':
      return <Skills {...skills} title="@todo plug web skills | title is required" />;
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
