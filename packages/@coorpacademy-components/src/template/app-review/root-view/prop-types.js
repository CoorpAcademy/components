import PropTypes from 'prop-types';
import keys from 'lodash/fp/keys';
import ReviewDashboardSkills from '../../review-dashboard-skills';
import SlidesReview from '../slides-review';
import {ViewNames} from './common';

export default {
  viewName: PropTypes.oneOf(keys(ViewNames)),
  navigateBack: PropTypes.func,
  navigateTo: PropTypes.func,
  onboarding: PropTypes.shape({...ReviewDashboardSkills.propTypes}),
  slidesReview: PropTypes.shape({...SlidesReview.propTypes})
};
