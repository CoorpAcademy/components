import PropTypes from 'prop-types';
import propTypes, {BulletPointMenuButtonProps} from '../../molecule/bullet-point-menu-button/types';

const actionButtonPropTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  faIconName: PropTypes.string
};

const customSkillHeaderPropTypes = {
  onQuitClick: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  tag: PropTypes.shape({
    label: PropTypes.oneOf(['Published', 'Ongoing changes', 'Draft', 'Archived']).isRequired,
    type: PropTypes.oneOf(['success', 'progress', 'warning']).isRequired,
    size: PropTypes.string.isRequired
  }).isRequired,
  saveStatus: PropTypes.shape({
    label: PropTypes.oneOf(['Unsaved changes', 'Saved']),
    display: PropTypes.bool.isRequired
  }).isRequired,
  bulletPointMenuButton: PropTypes.shape(propTypes).isRequired,
  saveButton: PropTypes.shape(actionButtonPropTypes).isRequired,
  publishButton: PropTypes.shape(actionButtonPropTypes).isRequired,
  archiveButton: PropTypes.shape(actionButtonPropTypes)
};

export default customSkillHeaderPropTypes;

type TagProps = {
  label: 'Published' | 'Ongoing changes' | 'Draft' | 'Archived';
  type: 'success' | 'progress' | 'warning';
  size: string;
};

export type ActionButtonProps = {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  faIconName?: string;
};

type SaveStatusProps = {
  label?: 'Unsaved changes' | 'Saved';
  display: boolean;
};

export type CustomSkillHeaderProps = {
  onQuitClick: () => void;
  title: string;
  tag: TagProps;
  saveStatus: SaveStatusProps;
  bulletPointMenuButton: BulletPointMenuButtonProps;
  saveButton: ActionButtonProps;
  publishButton: ActionButtonProps;
  archiveButton?: ActionButtonProps;
};
