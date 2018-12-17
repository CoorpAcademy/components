import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 7h2v1.841a9.905 9.905 0 0 1 2-.639V7h4v1.202c.696.142 1.364.36 2 .639V7h2a1 1 0 0 0 .707-.293l2-2-1.414-1.414L17.586 5H6.414L4.707 3.293 3.293 4.707l2 2C5.481 6.894 5.734 7 6 7zM12 9c-4.963 0-9 4.037-9 9v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2c0-4.963-4.037-9-9-9zm1 8h-2v-4h2v4z" />
    </g>
  </svg>
);

export default SvgComponent;
