import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 8.586L9.707 7.293 8.293 8.707 11 11.415l4.707-4.708-1.414-1.414zM11 15.586l-1.293-1.293-1.414 1.414L11 18.415l4.707-4.708-1.414-1.414z" />
      <path d="M18 2H6c-1.103 0-2 .898-2 2v16c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V4c0-1.102-.897-2-2-2zM6 20V4h12l.001 16H6z" />
    </g>
  </svg>
);

export default SvgComponent;
