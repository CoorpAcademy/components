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
    detectScrollbar: true,
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
