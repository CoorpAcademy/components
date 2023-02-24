import {ButtonProps, ButtonMenuPropsFixture} from '../../types';
import {actionButtonProps, deleteButtonProps} from './default';

export const disabledButtonProps: ButtonProps = {
  'data-name': 'menu-disabled-button',
  label: 'Disabled',
  onClick: () => console.log('Disabled'),
  disabled: true
};

const defaultFixture: ButtonMenuPropsFixture = {
  props: {
    buttons: [actionButtonProps, disabledButtonProps, deleteButtonProps],
    'aria-label': 'aria button 2',
    'data-name': 'default-menu-2'
  }
};

export default defaultFixture;
