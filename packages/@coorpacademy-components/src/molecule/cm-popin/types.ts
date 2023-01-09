import PropTypes from 'prop-types';
import Cta from '../../atom/button-link';
import InputSwitch from '../../atom/input-switch';

const propTypes = {
  content: PropTypes.string,
  mode: PropTypes.oneOf(['alert', 'information', 'cookie']),
  header: PropTypes.string,
  firstButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    'aria-label': PropTypes.string,
    largeButton: PropTypes.bool,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary', 'tertiary']),
    customStyle: Cta.propTypes.customStyle
  }),
  secondButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
    'aria-label': PropTypes.string,
    largeButton: PropTypes.bool,
    customStyle: Cta.propTypes.customStyle
  }),
  thirdButton: PropTypes.shape({
    label: PropTypes.string,
    handleOnclick: PropTypes.func,
    type: PropTypes.oneOf(['dangerous', 'primary', 'secondary']),
    'aria-label': PropTypes.string,
    largeButton: PropTypes.bool,
    customStyle: Cta.propTypes.customStyle
  }),
  onClose: PropTypes.func,
  icon: PropTypes.string,
  backgroundImageUrl: PropTypes.string,
  descriptionText: PropTypes.string,
  cookieTitle: PropTypes.string,
  descriptionBtnTxt: PropTypes.string,
  listBtnSwicth: PropTypes.arrayOf(PropTypes.shape(InputSwitch.propTypes))
};

export type QuitPopinButton = {
  'aria-label'?: string;
  label: string;
  type: string;
  customStyle?: {
    backgroundColor?: string;
    color?: string;
  };
  handleOnclick: () => void;
};

export type CMPopinProps = {
  content: string;
  icon: string;
  mode: string;
  descriptionText: string;
  firstButton?: QuitPopinButton;
  secondButton?: QuitPopinButton;
};

export default propTypes;
