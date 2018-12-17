import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15.292 7.293l1.414 1.413-2 2-1.413-1.413zM19.292 3.293l1.414 1.413-2 2-1.413-1.413zM7.708 17.707l-1.414-1.413 2-2 1.413 1.413z" />
      <path d="M4 8.051V4H2v18h18v-2h-4.051C15.461 13.63 10.37 8.54 4 8.051zm0 2c5.268.478 9.472 4.682 9.949 9.949H4v-9.949z" />
    </g>
  </svg>
);

export default SvgComponent;
