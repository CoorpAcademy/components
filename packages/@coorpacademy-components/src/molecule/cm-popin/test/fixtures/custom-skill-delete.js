export default {
  props: {
    content: 'Delete skill?',
    descriptionText:
      'Once deleted, this skill cannot be recovered. Are you sure you want to proceed?',
    icon: {
      iconName: 'triangle-exclamation',
      iconColor: '#A30000',
      backgroundColor: '#FFD1D1',
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
      label: 'Delete skill',
      type: 'dangerous',
      'aria-label': 'Undo this operation',
      handleOnClick: () => {},
      icon: {
        position: 'left',
        faIcon: {
          name: 'trash',
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
