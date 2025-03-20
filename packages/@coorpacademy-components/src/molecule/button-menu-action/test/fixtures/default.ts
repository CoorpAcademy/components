import {COLORS} from '../../../../variables/colors';
import {ButtonMenuActionPropsFixture} from '../../types';
import {ButtonProps} from '../../../../atom/button-menu/types';

const buttonBase: ButtonProps = {
  type: 'defaultLeft',
  onClick: () => console.log('click'),
  customStyle: {width: '238px'},
  label: ''
};

const defaultFixture: ButtonMenuActionPropsFixture = {
  props: {
    button: {
      type: 'primary',
      label: 'Add translation',
      'aria-label': 'aria button',
      'data-name': 'button-menu-action',
      onClick: () => console.log('click on Add translations button'),
      hoverBackgroundColor: COLORS.primary_weak_hover,
      hoverColor: COLORS.primary_strong,
      icon: {
        position: 'left',
        faIcon: {
          name: 'plus',
          color: COLORS.primary_strong,
          size: 14,
          customStyle: {padding: 0}
        }
      },
      customStyle: {
        width: 'fit-content',
        backgroundColor: COLORS.primary_weak,
        color: COLORS.primary_strong,
        borderRadius: '12px',
        paddingRight: '8px',
        paddingleft: '16px',
        fontWeight: 600
      }
    },
    menu: {
      buttons: [
        {...buttonBase, label: '🇫🇷 French', 'data-name': 'label-french-button', disabled: true},
        {...buttonBase, label: '🇪🇸 Spanish'},
        {...buttonBase, label: '🇮🇹 Italian'},
        {...buttonBase, label: '🇩🇪 German'},
        {...buttonBase, label: '🇷🇺 Russian'},
        {...buttonBase, label: '🇵🇱 Polish'},
        {...buttonBase, label: '🇹🇷 Turkish'}
      ]
    },

    menuWrapper: {
      customStyle: {maxHeight: '252px'}
    }
  }
};

export default defaultFixture;
