import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 16.77l6.556-4.683A2.013 2.013 0 0 0 14 12H2c-.193 0-.378.036-.556.088L8 16.77z" />
      <path d="M8.581 18.813a1.002 1.002 0 0 1-1.162 0l-7.365-5.26A2.056 2.056 0 0 0 0 14v8c0 1.102.897 2 2 2h12c1.104 0 2-.898 2-2v-8c0-.153-.021-.303-.055-.446l-7.364 5.259zM22-.001c-1.104 0-2 1-2 2 0-1-.896-2-2-2s-2 .895-2 2c0 3 4 6 4 6s4-3 4-6a2 2 0 0 0-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
