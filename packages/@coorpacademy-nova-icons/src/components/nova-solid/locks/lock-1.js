import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M4 10H2V4c0-1.102.897-2 2-2h6v2H4v6zM22 10h-2V4h-6V2h6c1.103 0 2 .898 2 2v6zM10 22H4c-1.103 0-2-.898-2-2v-6h2v6h6v2zM20 22h-6v-2h6v-6h2v6c0 1.102-.897 2-2 2z"
    />
    <path
      fill="currentColor"
      d="M16 11v-1c0-2.206-1.794-4-4-4s-4 1.794-4 4v1H7v7h10v-7h-1zm-4 5a1.5 1.5 0 11.001-3.001A1.5 1.5 0 0112 16zm2-5h-4v-1c0-1.102.897-2 2-2s2 .898 2 2v1z"
    />
  </svg>
);

export default SvgComponent;
