import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17 2c-.712 0-1.387.154-2 .422 1.765.772 3 2.529 3 4.578a4.999 4.999 0 0 1-3 4.579A4.995 4.995 0 0 0 17 12a5 5 0 1 0 0-10zM10 14c2.206 0 4-1.793 4-4 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 2.207 1.794 4 4 4zM10 15c-4.71 0-8 2.467-8 6v1h16v-1c0-3.532-3.29-6-8-6z" />
    </g>
  </svg>
);

export default SvgComponent;
