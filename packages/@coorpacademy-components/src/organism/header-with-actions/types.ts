import PropTypes from 'prop-types';
import bulletPointMenuButtonPropTypes, {
  BulletPointMenuButtonProps
} from '../../molecule/bullet-point-menu-button/types';
import ButtonLinkPropTypes, {ButtonLinkProps} from '../../atom/button-link/types';

const closeButtonPropTypes = {
  size: PropTypes.oneOf(['default', 'small', 'responsive']).isRequired,
  icon: PropTypes.string.isRequired,
  'data-name': PropTypes.string.isRequired,
  'aria-label': PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
const headerWithActionsPropTypes = {
  closeButton: PropTypes.shape(closeButtonPropTypes),
  title: PropTypes.string.isRequired,
  tag: PropTypes.shape({
    label: PropTypes.oneOf(['Published', 'Ongoing changes', 'Draft', 'Archived']).isRequired,
    type: PropTypes.oneOf(['success', 'progress', 'warning']).isRequired,
    size: PropTypes.string.isRequired
  }).isRequired,
  saveStatus: PropTypes.shape({
    display: PropTypes.bool.isRequired,
    label: PropTypes.oneOf(['Unsaved changes', 'Saved'])
  }).isRequired,
  bulletPointMenuButton: PropTypes.shape(bulletPointMenuButtonPropTypes),
  actionButtons: PropTypes.arrayOf(PropTypes.shape(ButtonLinkPropTypes)).isRequired
};

export default headerWithActionsPropTypes;

type TagProps = {
  label: 'Published' | 'Ongoing changes' | 'Draft' | 'Archived';
  type: 'success' | 'progress' | 'warning';
  size: string;
};

type SaveStatusProps = {
  display: boolean;
  label?: 'Unsaved changes' | 'Saved';
};

type CloseButtonProps = {
  size: 'default' | 'small' | 'responsive';
  icon: string;
  'data-name': string;
  'aria-label': string;
  onClick: () => void;
};

export type HeaderWithActionsProps = {
  closeButton: CloseButtonProps;
  title: string;
  tag: TagProps;
  saveStatus: SaveStatusProps;
  actionButtons: ButtonLinkProps[];
  bulletPointMenuButton?: BulletPointMenuButtonProps;
};

export type HeaderWithActionsPropsFixture = {props: HeaderWithActionsProps};
