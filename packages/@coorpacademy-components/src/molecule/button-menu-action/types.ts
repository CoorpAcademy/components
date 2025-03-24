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
  })
};
export default ButtonMenuActionPropTypes;

export type ButtonMenuActionProps = {
  button: ButtonLinkProps;
  menu: ButtonMenuProps;
  menuWrapper?: {
    ariaLabel?: string;
    customStyle?: Record<string, unknown>;
  };
};

export type ButtonMenuActionPropsFixture = {props: ButtonMenuActionProps};
