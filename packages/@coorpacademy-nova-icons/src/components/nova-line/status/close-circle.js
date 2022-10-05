import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12.042 22c-5.514 0-10-4.486-10-10s4.486-10 10-10 10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M16.749 8.707l-1.415-1.414-3.292 3.293-3.293-3.293-1.415 1.414L10.627 12l-3.293 3.293 1.415 1.414 3.293-3.292 3.292 3.292 1.415-1.414L13.456 12z"
    />
  </svg>
);

export default SvgComponent;
