import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M2 13h3v3H2zM3.8 10.6a2 2 0 0 0 2.8-.4c.312-.416.432-.914.384-1.395a3.388 3.388 0 0 0 3.376-1.286A3.399 3.399 0 1 0 4.92 3.44a3.392 3.392 0 0 0-.288 3.601A1.987 1.987 0 0 0 3.4 7.8a2 2 0 0 0 .4 2.8zM7 16h.231l3.037-3H7zM22 13h-6.04l5.743-5.673-1.406-1.423L3.711 22.29l1.406 1.421L12.923 16H22z" />
    </g>
  </svg>
);

export default SvgComponent;
