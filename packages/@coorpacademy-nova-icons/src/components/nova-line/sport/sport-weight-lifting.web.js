import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 9V7H6V6c0-1.104-.897-2-2-2H2C.897 4 0 4.896 0 6v4c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V9h2zm-6 1V6h2l.001 4H2zM22 4h-2c-1.103 0-2 .896-2 2v1h-1v2h1v1c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2V6c0-1.104-.897-2-2-2zm-2 6V6h2l.001 4H20z" />
      <path d="M16 12.209V7c0-1.104-.897-2-2-2h-3c-1.103 0-2 .896-2 2v2c-1.103 0-2 .896-2 2v2c0 1.009.75 1.845 1.721 1.98L7.844 21h8.313l-1-6.861.843-1.93zm-2-.418l-.906 2.071.75 5.138h-3.688l.875-6H9v-2h2V7h3v4.791z" />
    </g>
  </svg>
);

export default SvgComponent;
