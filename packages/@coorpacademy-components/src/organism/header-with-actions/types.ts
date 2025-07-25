import PropTypes from 'prop-types';

const ButtonMenuPropTypes = {
  dataName: PropTypes.string,
  label: PropTypes.string.isRequired,
  iconName: PropTypes.string.isRequired,
  iconColor: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const ButtonActionPropTypes = {
  type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  iconName: PropTypes.string,
  iconColor: PropTypes.string
};

const HeaderWithActionsPropTypes = {
  closeButton: PropTypes.shape({
    'aria-label': PropTypes.string,
    onClick: PropTypes.func.isRequired
  }),
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
  actionButtons: PropTypes.arrayOf(PropTypes.shape(ButtonActionPropTypes)).isRequired,
  bulletPointMenuButton: PropTypes.shape({
    buttons: PropTypes.arrayOf(PropTypes.shape(ButtonMenuPropTypes)).isRequired,
    buttonAriaLabel: PropTypes.string,
    disabled: PropTypes.bool.isRequired
  }),
  isFetching: PropTypes.bool
};

export default HeaderWithActionsPropTypes;

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
  'aria-label': string;
  onClick: () => void;
};

export type ButtonMenuProps = {
  dataName: string;
  label: string;
  iconName: string;
  iconColor: string;
  onClick: () => void;
};

type BulletPointMenuButtonProps = {
  buttons: ButtonMenuProps[];
  buttonAriaLabel?: string;
  disabled: boolean;
};

export type ButtonActionProps = {
  type: 'primary' | 'secondary';
  label: string;
  onClick: () => void;
  disabled?: boolean;
  iconName?: string;
  iconColor?: string;
};

export type HeaderWithActionsProps = {
  closeButton: CloseButtonProps;
  title: string;
  tag: TagProps;
  saveStatus: SaveStatusProps;
  actionButtons: ButtonActionProps[];
  bulletPointMenuButton?: BulletPointMenuButtonProps;
  isFetching?: boolean;
};

export type HeaderWithActionsPropsFixture = {props: HeaderWithActionsProps};
