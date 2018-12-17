import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14.124 17.012l-3.044-6.088L7.434 17H6v2h2.566l2.354-3.923 2.956 5.911L16.535 17H18v-2h-2.535z" />
      <path d="M22 14h-1v-3c0-4.962-4.038-9-9-9s-9 4.038-9 9v3H2c-1.103 0-2 .896-2 2v4c0 1.103.897 2 2 2h2a1 1 0 0 0 1-1V11c0-3.859 3.14-7 7-7s7 3.141 7 7v10a1 1 0 0 0 1 1h2c1.103 0 2-.897 2-2v-4c0-1.104-.897-2-2-2zM3 20H2v-4h1v4zm18 0v-4h1l.001 4H21z" />
    </g>
  </svg>
);

export default SvgComponent;
