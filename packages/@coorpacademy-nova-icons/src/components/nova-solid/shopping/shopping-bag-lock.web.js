import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 2c1.654 0 3 1.346 3 3h2c0-2.757-2.243-5-5-5S4 2.243 4 5h2c0-1.654 1.346-3 3-3zM17.23 9.234L17 6H1L0 20h12v-4c0-3.254 2.223-5.981 5.23-6.766z" />
      <path d="M22.999 15c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .898 2 2h-4c0-1.102.897-2 2-2zm3 9h-6v-5h6v5z" />
      <circle cx={19} cy={19} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
