import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 1.999H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-16c0-1.103-.897-2-2-2zm-16 18v-16h16l.001 16H4z" />
      <path d="M16 8.999h-.382a.999.999 0 0 1-.895-.552l-.447-.894a1 1 0 0 0-.895-.554h-2.764a1 1 0 0 0-.895.554l-.446.893a.998.998 0 0 1-.894.553H8a1 1 0 0 0-1 1v5c0 .554.447 1 1 1h8c.553 0 1-.446 1-1v-5a1 1 0 0 0-1-1zm-4 5a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 13.999z" />
    </g>
  </svg>
);

export default SvgComponent;
