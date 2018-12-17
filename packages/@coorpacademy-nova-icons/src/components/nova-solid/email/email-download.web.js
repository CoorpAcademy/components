import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 16.77l6.556-4.683A2.045 2.045 0 0 0 14 12H2c-.194 0-.378.037-.556.088L8 16.77z" />
      <path d="M8.581 18.813a1 1 0 0 1-1.162 0l-7.364-5.26A1.99 1.99 0 0 0 0 14v8c0 1.102.897 2 2 2h12c1.103 0 2-.898 2-2v-8c0-.154-.021-.303-.055-.446l-7.364 5.259zM22.293 3.293L20 5.585V-.001h-2v5.586l-2.293-2.292-1.414 1.414L19 9.414l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
