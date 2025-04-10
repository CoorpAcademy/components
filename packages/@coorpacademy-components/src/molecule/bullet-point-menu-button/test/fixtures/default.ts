import {
  actionButtonProps,
  deleteButtonProps
} from '../../../../atom/button-menu/test/fixtures/default';
import {BulletPointMenuButtonPropsFixture} from '../../types';

const defaultFixture: BulletPointMenuButtonPropsFixture = {
  props: {
    buttonAriaLabel: 'aria button',
    menuAriaLabel: 'aria menu',
    buttons: [actionButtonProps, deleteButtonProps]
  }
};

export default defaultFixture;
