import React from 'react';

export default {
  props: {
    type: 'a',
    href: '/plop',
    children: <p>foo</p>,
    onClick: () => console.log('click on foo')
  }
};
