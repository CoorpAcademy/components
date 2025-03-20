export default {
  props: {
    content: 'Archive skill?',
    descriptionText:
      'The skill will be hidden from the catalog.You can always re-publish it afterwards.',
    icon: {
      iconName: 'circle-exclamation',
      iconColor: '#A38300',
      backgroundColor: '#FFF9D1',
      preset: 'xl'
    },
    firstButton: {
      label: 'Cancel',
      type: 'secondary',
      'aria-label': 'Cancel this operation',
      handleOnClick: () => {},
      customStyle: {
        fontWeight: '600'
      }
    },
    secondButton: {
      label: 'Confirm',
      type: 'primary',
      'aria-label': 'Undo this operation',
      handleOnClick: () => {},
      icon: {
        position: 'left',
        faIcon: {
          name: 'circle-check',
          color: 'white',
          size: 14,
          customStyle: {
            padding: 0,
            alignItems: 'baseline'
          }
        }
      },
      customStyle: {
        fontWeight: '600'
      }
    }
  }
};
