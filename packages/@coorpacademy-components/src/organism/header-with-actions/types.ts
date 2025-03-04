import PropTypes from 'prop-types';
import bulletPointMenuButtonPropTypes, {
  BulletPointMenuButtonProps
} from '../../molecule/bullet-point-menu-button/types';

const actionButtonPropTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  faIconName: PropTypes.string
};

const headerWithActionsPropTypes = {
  onClose: PropTypes.func.isRequired,
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
  actionButtons: PropTypes.arrayOf(PropTypes.shape(actionButtonPropTypes)).isRequired
};

export default headerWithActionsPropTypes;

type TagProps = {
  label: 'Published' | 'Ongoing changes' | 'Draft' | 'Archived';
  type: 'success' | 'progress' | 'warning';
  size: string;
};

export type ActionButtonProps = {
  label: string;
  onClick: () => void;
  type?: string;
  disabled?: boolean;
};

type SaveStatusProps = {
  display: boolean;
  label?: 'Unsaved changes' | 'Saved';
};

export type HeaderWithActionsProps = {
  onClose: () => void;
  title: string;
  tag: TagProps;
  saveStatus: SaveStatusProps;
  actionButtons: ActionButtonProps[];
  bulletPointMenuButton?: BulletPointMenuButtonProps;
};
