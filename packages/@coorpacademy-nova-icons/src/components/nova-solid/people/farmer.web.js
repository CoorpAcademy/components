import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.899 6a5 5 0 0 0-9.798 0h9.798zM2 7v2h5c0 2.757 2.243 5 5 5s5-2.243 5-5h5V7H2zm10 5c-1.654 0-3-1.346-3-3h6c0 1.654-1.346 3-3 3z" />
      <g>
        <path d="M9 21h6v-5.619c-.911-.244-1.915-.381-3-.381s-2.089.137-3 .381V21zM4 21v3h3v-7.815C5.128 17.242 4 18.937 4 21zM17 16.185V24h3v-3c0-2.063-1.128-3.758-3-4.815z" />
      </g>
    </g>
  </svg>
);

export default SvgComponent;
