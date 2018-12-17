import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 16c2.664 0 5-2.336 5-5 0-2.347-1.161-3.575-1.293-3.706a1.002 1.002 0 0 0-1.262-.126L13 8.132V2a1.001 1.001 0 0 0-1.832-.555C10.742 2.086 7.001 7.79 7.001 11c0 2.757 2.243 5 4.999 5zM2 23a1 1 0 0 0 1 1h6v-3H2v2zM6.001 17H3c-.552 0-1 .449-1 1v2h4v-3zM7 17h6v3H7zM17 24h4a1 1 0 0 0 1-1v-2h-5v3zM21 17h-7v3h8v-2a1 1 0 0 0-1-1zM10 21h6v3h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
