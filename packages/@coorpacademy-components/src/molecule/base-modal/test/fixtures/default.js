import React from 'react';
import {COLORS} from '../../../../variables/colors';

export default {
  props: {
    title: 'Modal header',
    headerIcon: {
      name: 'eyes',
      backgroundColor: COLORS.purple_100
    },
    description: 'Modal description',
    children: <>Modal body</>,
    isOpen: true,
    footer: {
      text: 'Footer description',
      isError: false,
      cancelButton: {
        onCancel: () => console.log('cancel'),
        label: 'Cancel',
        disabled: false
      },
      confirmButton: {
        onConfirm: () => console.log('confirm'),
        label: 'Confirm',
        iconName: 'compass',
        disabled: false
      }
    },
    onClose: () => console.log('close modal')
  }
};
