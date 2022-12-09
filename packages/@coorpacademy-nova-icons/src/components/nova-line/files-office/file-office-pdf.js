import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3h10v4h4v1h2V5.586L16.414 1H5c-1.103 0-2 .898-2 2v5h2V3zM19 21H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM9 10v8h2c2.206 0 4-1.794 4-4s-1.794-4-4-4H9zm4 4c0 1.103-.897 2-2 2v-4c1.103 0 2 .898 2 2zM22 12v-2h-4c-1.103 0-2 .898-2 2v6h2v-3h3v-2h-3v-1h4zM4 16h1c1.654 0 3-1.346 3-3s-1.346-3-3-3H2v8h2v-2zm0-4h1a1.001 1.001 0 010 2H4v-2z" />
    </g>
  </svg>
);

export default SvgComponent;
