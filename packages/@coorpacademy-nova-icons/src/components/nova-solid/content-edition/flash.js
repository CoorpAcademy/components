import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path fill="currentColor" d="M19 11h-6V3L5 13h6v8z" />
  </svg>
);

export default SvgComponent;
