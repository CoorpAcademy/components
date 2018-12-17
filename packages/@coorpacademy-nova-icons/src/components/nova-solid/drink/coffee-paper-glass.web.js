import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.003 21.077A1 1 0 0 0 8 22h8a1 1 0 0 0 .997-.922L17.85 10H6.15l.853 11.077zM16 14l-.308 4H8.308L8 14h8zM16.971 2.757A1.001 1.001 0 0 0 16 2H8c-.459 0-.859.312-.971.757l-.56 2.242h11.062l-.56-2.242zM18 5.999H6a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a1 1 0 0 0-1-1z" />
    </g>
  </svg>
);

export default SvgComponent;
