import React from 'react';

export default {
  props: {
    title: 'Modal header',
    headerIcon: {
      name: 'eyes',
      color: '#DDD1FF'
    },
    description: 'Modal description',
    children: <>Modal body</>,
    isOpen: true,
    onClose: () => console.log('close modal')
  }
};
