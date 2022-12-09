import * as React from 'react';

const SvgComponent = props => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2h-9c-1.104 0-2 .898-2 2v2c0 1.102.896 2 2 2h9c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zM20 9h-9c-1.104 0-2 .898-2 2v2c0 1.102.896 2 2 2h9c1.104 0 2-.898 2-2v-2c0-1.102-.896-2-2-2zM20 16h-9c-1.104 0-2 .898-2 2v2c0 1.103.896 2 2 2h9c1.104 0 2-.897 2-2v-2c0-1.102-.896-2-2-2zM6 2H4c-1.103 0-2 .898-2 2v2c0 1.102.897 2 2 2h2c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM6 9H4c-1.103 0-2 .898-2 2v2c0 1.102.897 2 2 2h2c1.103 0 2-.898 2-2v-2c0-1.102-.897-2-2-2zM6 16H4c-1.103 0-2 .898-2 2v2c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-2c0-1.102-.897-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
