import React from 'react';
import { button } from './Button.css';

export default (props) => (
  <button className={ button } {...props}>{ props.children}</button>
)
