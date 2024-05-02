import React from 'react';

export default {
  props: {
    title: 'Modal header',
    headerIcon: {
      name: 'eyes',
      backgroundColor: '#DDD1FF'
    },
    description: 'Modal description',
    children: <>Modal body</>,
    isOpen: true,
    footer: {
      cancelButton: {
        onCancel: () => console.log('cancel'),
        label: 'Cancel',
        disabled: true
      },
      confirmButton: {
        onConfirm: () => console.log('confirm'),
        label: 'Confirm',
        iconName: 'compass',
        disabled: true
      }
    },
    onClose: () => console.log('close modal')
  }
};
