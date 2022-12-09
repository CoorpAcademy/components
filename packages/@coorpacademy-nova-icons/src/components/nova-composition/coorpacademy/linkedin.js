import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 12" aria-hidden="true" {...props}>
    <path
      d="M0 1.4C0 .6.6 0 1.6 0s1.6.6 1.6 1.4c0 .8-.6 1.4-1.6 1.4S0 2.2 0 1.4zm10.1 2.4c-1.5 0-2.4.8-2.6 1.4V3.8h-3V12h2.9V7.6v-.1c0-.2 0-.4.1-.6.2-.5.6-1 1.4-1 1 0 1.5.8 1.5 1.9V12h3V7.5c0-2.6-1.5-3.7-3.3-3.7zm-9.8 0h2.6V12H.3V3.8z"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
