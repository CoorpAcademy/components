import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    iconPreview: {
      title: '-',
      icon: {color: COLORS.cm_blue_700, name: 'circle'}
    },
    inputText: {
      description: 'Use darker colors (e.g., #0042AD) to ensure better contrast and visibility.',
      onChange: (value: string) => console.log(`Change color: ${value}`),
      value: COLORS.cm_blue_700
    },
    buttonLink: {
      type: 'secondary',
      label: 'Change icon',
      ariaLabel: 'aria button',
      dataName: 'default-button',
      icon: {
        position: 'left',
        faIcon: {
          name: 'arrows-rotate',
          size: 16
        }
      },
      onClick: () => console.log('click'),
      customStyle: {
        paddingTop: '12px',
        paddingRight: '24px',
        paddingBottom: '12px',
        paddingLeft: '24px'
      }
    }
  }
};
