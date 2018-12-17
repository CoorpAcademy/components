import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M14 4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v5h6V4zM16.165 10.707A2.001 2.001 0 0 0 14.639 10H7.361a2 2 0 0 0-1.973 2.33l1.334 8A2 2 0 0 0 8.694 22h4.611c.977 0 1.812-.707 1.973-1.671l1.334-8a2 2 0 0 0-.447-1.622zM11 18a2 2 0 1 1 .001-4.001A2 2 0 0 1 11 18z" />
    </g>
  </svg>
);

export default SvgComponent;
