import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M18 3H6c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h2.875L12 23l3.125-5H18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-6 13a1 1 0 110-2 1 1 0 010 2zm1-3.127V13h-2v-2h1c1.103 0 2-.898 2-2 0-1.102-.897-2-2-2s-2 .898-2 2H8c0-2.206 1.794-4 4-4s4 1.794 4 4a4.007 4.007 0 01-3 3.873z"
    />
  </svg>
);

export default SvgComponent;
