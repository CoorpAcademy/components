import {COLORS} from '../../../../variables/colors';
import {ButtonMenuActionPropsFixture} from '../../types';
import {ButtonProps} from '../../../../atom/button-menu/types';

const buttonBase: ButtonProps = {
  type: 'defaultLeft',
  onClick: () => console.log('click')
};

const defaultFixture: ButtonMenuActionPropsFixture = {
  props: {
    button: {
      type: 'text',
      label: 'FR',
      'aria-label': 'aria button',
      'data-name': 'button-menu-action',
      onClick: () => console.log('click on FR button'),
      icon: {
        position: 'left',
        faIcon: {
          name: 'globe',
          color: COLORS.neutral_700,
          size: 14
        }
      },
      customStyle: {
        width: 'fit-content',
        color: COLORS.neutral_500,
        fontWeight: 600
      },
      withChevron: true
    },
    menu: {
      buttons: [
        {
          ...buttonBase,
          label: 'French',
          'data-name': 'label-french-button',
          icon: {
            position: 'right',
            faIcon: {
              name: 'check',
              color: COLORS.white,
              backgroundColor: COLORS.cm_primary_blue,
              size: 10,
              customStyle: {
                padding: '0px',
                height: '16px',
                width: '16px'
              }
            }
          },
          customStyle: {backgroundColor: COLORS.cm_blue_50},
          contentCustomStyle: {
            width: '100%',
            justifyContent: 'space-between'
          }
        },
        {...buttonBase, label: 'Spanish', 'data-name': 'label-spanish-button'},
        {...buttonBase, label: 'Italian', 'data-name': 'label-italian-button'},
        {...buttonBase, label: 'German', 'data-name': 'label-german-button'},
        {...buttonBase, label: 'Russian', 'data-name': 'label-russian-button'},
        {...buttonBase, label: 'Polish', 'data-name': 'label-polish-button'},
        {...buttonBase, label: 'Turkish', 'data-name': 'label-turkish-button'}
      ]
    },
    menuWrapper: {
      customStyle: {maxHeight: '248px', width: '209px'}
    },
    closeOnClick: false
  }
};

export default defaultFixture;
