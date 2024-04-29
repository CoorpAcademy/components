import React from 'react';

export default {
  props: {
    title: 'Modal header',
    headerIconName: 'eyes',
    children: <>Modal body</>,
    isOpen: true,
    onClose: () => console.log('close modal')
  }
};
