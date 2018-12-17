import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 16.771l6.556-4.683A2.007 2.007 0 0 0 14 12H2c-.194 0-.378.037-.556.088L8 16.771z" />
      <path d="M8.581 18.813a.995.995 0 0 1-1.162 0l-7.364-5.26A1.996 1.996 0 0 0 0 14v8c0 1.103.897 2 2 2h12c1.104 0 2-.897 2-2v-8c0-.154-.021-.303-.055-.446l-7.364 5.259zM14 8h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
