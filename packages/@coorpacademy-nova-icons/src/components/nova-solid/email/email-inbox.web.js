import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M15.293 3.293L13 5.585V.999h-2v4.586L8.707 3.293 7.293 4.707 12 9.414l4.707-4.707zM12 16.823l8.965-5.563A1.963 1.963 0 0 0 20 11H4c-.352 0-.678.1-.965.26L12 16.823z" />
      <path d="M12.527 18.849a1 1 0 0 1-1.054.001l-9.47-5.877L2 13v9c0 1.102.897 2 2 2h16c1.104 0 2-.898 2-2v-9l-.003-.027-9.47 5.876z" />
    </g>
  </svg>
);

export default SvgComponent;
