import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M23 11h-3a.973.973 0 0 0-.529.173l-9.3-8.415-1.342 1.485L19 13.443V22a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V12a1 1 0 0 0-1-1zm-1 10h-1v-8h1v8zM4 12l-3 5v4h1v.5a1.5 1.5 0 0 0 3 0V21h6v.5a1.5 1.5 0 0 0 3 0V21h1v-4l-3-5H4zm2 8H3v-1h3v1zm4 0v-1h3v1h-3zm-7-3l1.766-3h6.469L13 17H3z" />
    </g>
  </svg>
);

export default SvgComponent;
