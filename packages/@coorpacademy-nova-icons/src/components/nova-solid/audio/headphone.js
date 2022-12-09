import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.485-10 10v8a2 2 0 002 2h2a2 2 0 002-2v-3a2 2 0 00-2-2H4v-3c0-4.412 3.589-8 8-8s8 3.588 8 8v3h-2a2 2 0 00-2 2v3a2 2 0 002 2h2a2 2 0 002-2v-8c0-5.515-4.486-10-10-10z"
    />
  </svg>
);

export default SvgComponent;
