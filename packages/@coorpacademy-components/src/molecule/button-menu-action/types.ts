import PropTypes from 'prop-types';
import ButtonLinkPropTypes, {ButtonLinkProps} from '../../atom/button-link/types';
import ButtonMenuPropTypes, {ButtonMenuProps} from '../../atom/button-menu/types';

const ButtonMenuActionPropTypes = {
  button: PropTypes.shape(ButtonLinkPropTypes).isRequired,
  menu: PropTypes.shape(ButtonMenuPropTypes).isRequired,
  menuWrapper: PropTypes.shape({
    ariaLabel: PropTypes.string,
    customStyle: PropTypes.objectOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object])
    )
  }),
  type: PropTypes.oneOf(['button', 'link']),
  primaryColor: PropTypes.string,
  closeOnClick: PropTypes.bool,
  enableScroll: PropTypes.bool
};
export default ButtonMenuActionPropTypes;

export type ButtonMenuActionProps = {
  button: ButtonLinkProps;
  menu: ButtonMenuProps;
  menuWrapper?: {
    ariaLabel?: string;
    customStyle?: Record<string, string | number>;
  };
  type?: 'button' | 'link';
  primaryColor?: string;
  containerCustom?: Record<string, string | number>;
  closeOnClick?: boolean;
  enableScroll?: boolean;
  showFade?: boolean;
};

export type ButtonMenuActionPropsFixture = {props: ButtonMenuActionProps};
