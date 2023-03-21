import {ButtonProps, ButtonMenuPropsFixture} from '../../types';

export const actionButtonProps: ButtonProps = {
  'data-name': 'menu-publish-button',
  label: 'Publish',
  onClick: () => console.log('Publish'),
  type: 'default'
};

export const deleteButtonProps: ButtonProps = {
  'data-name': 'menu-delete-button',
  label: 'Delete',
  onClick: () => console.log('Delete'),
  type: 'dangerous'
};

const defaultFixture: ButtonMenuPropsFixture = {
  props: {
    buttons: [actionButtonProps, deleteButtonProps],
    'aria-label': 'aria button',
    'data-name': 'default-menu'
  }
};

export default defaultFixture;
