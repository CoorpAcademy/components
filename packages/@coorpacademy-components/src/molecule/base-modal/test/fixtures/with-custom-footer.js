import React from 'react';
import {convert} from 'css-color-function';
import ButtonLink from '../../../../atom/button-link';

const primarySkinColor = '#0061FF';

const buttonConfirmProps = {
  customStyle: {
    backgroundColor: convert(`color(${primarySkinColor} a(0.07))`),
    color: primarySkinColor,
    transition: 'background-color 0.15s ease-in-out, color 0.15s ease-in-out'
  },
  onClick: () => console.log('confirm'),
  label: 'Confirm',
  icon: {
    position: 'left',
    faIcon: {
      name: 'compass',
      backgroundColor: convert(`color(${primarySkinColor} a(0.07))`),
      color: primarySkinColor,
      size: 16
    }
  }
};

const CustomFooter = () => (
  <div style={{display: 'flex', gap: '8px', width: '50%', padding: '16px'}}>
    <ButtonLink {...buttonConfirmProps} />
  </div>
);

export default {
  props: {
    title: 'Modal header',
    headerIconName: 'eyes',
    description: 'Modal description',
    children: <>Modal body</>,
    isOpen: true,
    footer: CustomFooter,
    onClose: () => console.log('close modal')
  }
};
