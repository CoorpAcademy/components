import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g fill="currentColor" fillRule="evenodd">
      <path d="M12 5C5.1 5 0 12.6 0 12.6s5.1 7.6 12 7.6 12-7.6 12-7.6S18.9 5 12 5zm0 12c-2.4 0-4.4-2-4.4-4.4s2-4.4 4.4-4.4c2.4 0 4.4 2 4.4 4.4S14.4 17 12 17z" />
      <path d="M12 10.5c-.6 0-1.1.2-1.5.6-.4.4-.6 1-.6 1.5 0 .6.2 1.1.6 1.5.4.4 1 .6 1.5.6.6 0 1.1-.2 1.5-.6.4-.4.6-1 .6-1.5 0-.6-.2-1.1-.6-1.5-.4-.4-.9-.6-1.5-.6z" />
    </g>
  </svg>
);

export default SvgComponent;
