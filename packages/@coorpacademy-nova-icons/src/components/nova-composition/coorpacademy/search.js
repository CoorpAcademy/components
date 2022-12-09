import * as React from 'react';

const SvgComponent = props => (
  <svg viewBox="0 0 13 13" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
    <path
      fillRule="nonzero"
      fill="currentColor"
      d="M12.414 11L9.167 7.753C9.691 6.963 10 6.018 10 5c0-2.757-2.243-5-5-5S0 2.243 0 5s2.243 5 5 5a4.964 4.964 0 002.753-.833L11 12.414 12.414 11zM2 5c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z"
    />
  </svg>
);

export default SvgComponent;
