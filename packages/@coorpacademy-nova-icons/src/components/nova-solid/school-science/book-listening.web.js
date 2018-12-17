import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 13h-1v-3c0-4.963-4.038-9-9-9s-9 4.037-9 9v3H2c-1.103 0-2 .896-2 2v4c0 1.104.897 2 2 2h2a1 1 0 0 0 1-1V10c0-3.859 3.14-7 7-7s7 3.141 7 7v10a1 1 0 0 0 1 1h2c1.103 0 2-.896 2-2v-4c0-1.104-.897-2-2-2z" />
      <path d="M6.507 9.13A1 1 0 0 0 6 10v7a1 1 0 0 0 .485.858L11 20.566v-9.332L7.515 9.143a.999.999 0 0 0-1.008-.013zM17.493 9.13a.997.997 0 0 0-1.007.013L13 11.234v9.332l4.515-2.708A1 1 0 0 0 18 17v-7a1 1 0 0 0-.507-.87z" />
    </g>
  </svg>
);

export default SvgComponent;
