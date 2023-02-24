import {
  actionButtonProps,
  deleteButtonProps
} from '../../../../atom/button-menu/test/fixtures/default';
import {BulletPointMenuButtonPropsFixture} from '../../types';

const defaultFixture: BulletPointMenuButtonPropsFixture = {
  props: {
    buttonAriaLabel: 'aria button',
    menuAriaLabel: 'aria menu',
    buttons: [actionButtonProps, deleteButtonProps],
    onClick: () =>
      console.log('click on bullet point button - test in a bigger component to see the menu')
  }
};

export default defaultFixture;
