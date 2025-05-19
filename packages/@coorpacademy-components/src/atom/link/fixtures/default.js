import React from 'react';
import Link from '../index';

export default {
  props: {
    children: 'Link text',
    href: 'https://coorpacademy.com'
  }
};

export const withIcon = {
  props: {
    children: 'Se déconnecter',
    href: 'https://coorpacademy.com/logout',
    icon: 'sign-out-alt'
  }
};

export const buttonStyle = {
  props: {
    children: 'Button style link',
    href: 'https://coorpacademy.com',
    useButtonTag: true
  }
};

export const disabled = {
  props: {
    children: 'Disabled link',
    href: 'https://coorpacademy.com',
    disabled: true
  }
};

export const withHover = {
  props: {
    children: 'Link with hover effect',
    href: 'https://coorpacademy.com',
    hoverColor: '#FF0000',
    hoverBackgroundColor: '#F5F5F5'
  }
}; 