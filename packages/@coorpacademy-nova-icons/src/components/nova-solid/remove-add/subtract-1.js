import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M21 14a1 1 0 01-1 1H4a1 1 0 01-1-1v-4a1 1 0 011-1h16a1 1 0 011 1v4z"
    />
  </svg>
);

export default SvgComponent;
