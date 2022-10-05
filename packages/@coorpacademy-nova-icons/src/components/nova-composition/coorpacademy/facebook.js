import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 12" {...props}>
    <path
      d="M12.2 11.3c0 .4-.3.7-.7.7H8.4V7.4H10l.2-1.8H8.4V4.4c0-.5.1-.9.9-.9h1V1.9c-.2 0-.7-.1-1.4-.1-1.4 0-2.4.8-2.4 2.4v1.3H4.9v1.8h1.6V12H.7c-.4 0-.7-.3-.7-.7V.7C0 .3.3 0 .7 0h10.8c.4 0 .7.3.7.7v10.6"
      fillRule="evenodd"
      clipRule="evenodd"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
