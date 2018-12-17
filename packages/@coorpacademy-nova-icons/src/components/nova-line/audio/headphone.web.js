import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 2C6.486 2 2 6.486 2 12v9a1 1 0 0 0 1 1h4c1.103 0 2-.897 2-2v-4c0-1.104-.897-2-2-2H4v-2c0-4.411 3.589-8 8-8s8 3.589 8 8v2h-3c-1.103 0-2 .896-2 2v4c0 1.103.897 2 2 2h4a1 1 0 0 0 1-1v-9c0-5.514-4.486-10-10-10zM7 16l.001 4H4v-4h3zm13 4h-3v-4h3v4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
