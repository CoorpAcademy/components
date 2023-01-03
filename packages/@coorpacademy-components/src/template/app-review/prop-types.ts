import PropTypes from 'prop-types';
import Player from './player';
import {ReviewPlayerProps} from './player/prop-types';

export type ViewName = 'slides' | 'loader';

export type AppReviewProps = {
  viewName: ViewName;
  slides?: ReviewPlayerProps;
  navigateBack?: () => void;
};

const propTypes = {
  viewName: PropTypes.oneOf(['slides', 'loader']),
  slides: PropTypes.shape({...Player.propTypes})
};

export default propTypes;
