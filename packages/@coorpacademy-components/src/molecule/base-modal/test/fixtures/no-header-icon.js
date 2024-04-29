import React from 'react';

export default {
  props: {
    title: 'Modal header',
    description: 'Modal description',
    children: <>Modal body</>,
    isOpen: true,
    onClose: () => console.log('close modal')
  }
};
