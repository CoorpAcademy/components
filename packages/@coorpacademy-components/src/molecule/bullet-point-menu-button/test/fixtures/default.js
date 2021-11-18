import {
  actionButtonProps,
  deleteButtonProps
} from '../../../../atom/button-menu/test/fixtures/default';

export default {
  props: {
    buttonAriaLabel: 'aria button',
    menuAriaLabel: 'aria menu',
    buttons: [actionButtonProps, deleteButtonProps],
    onClick: () =>
      console.log('click on bullet point button - test in a bigger component to see the menu'),
    componentKey: 'bullet-key'
  }
};
