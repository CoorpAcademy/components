import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 3C6.486 3 2 7.486 2 13v8h2v-8c0-4.411 3.589-8 8-8s8 3.589 8 8v8h2v-8c0-5.514-4.486-10-10-10z" />
      <path d="M13 14l.667 2h-3.334L11 14H9l-3 9h2l.333-1h7.334L16 23h2l-3-9h-2zm-4 6l.667-2h4.666L15 20H9z" />
    </g>
  </svg>
);

export default SvgComponent;
