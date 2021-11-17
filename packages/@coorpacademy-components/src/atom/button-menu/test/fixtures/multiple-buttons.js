import {actionButtonProps, deleteButtonProps} from './default';

export const disabledButtonProps = {
  'data-name': 'menu-disabled-button',
  label: 'Disabled',
  onClick: () => console.log('Disabled'),
  disabled: true
};

export default {
  props: {
    buttons: [actionButtonProps, disabledButtonProps, deleteButtonProps],
    'aria-label': 'aria button 2',
    'data-name': 'default-menu-2'
  }
};
