import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.303 14h5.395l6.396-4.264-7.219-6.518c-1.059-.848-2.642-.887-3.794.038l-7.173 6.48L9.303 14z" />
      <path d="M15.555 15.832A1.006 1.006 0 0 1 15 16H9c-.197 0-.391-.059-.555-.168L2 11.535V20c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2v-8.465l-6.445 4.297z" />
    </g>
  </svg>
);

export default SvgComponent;
