import React from 'react';
import SlidesReview from '../slides-review';
import propTypes from './prop-types';

// -----------------------------------------------------------------------------

const RootView = ({slidesReview}) => {
  return <SlidesReview {...slidesReview} />;
};

RootView.propTypes = propTypes;

// -----------------------------------------------------------------------------

export default RootView;
