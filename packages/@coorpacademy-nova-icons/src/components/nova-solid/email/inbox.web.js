import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142zM15.293 8.293L13 10.586V2h-2v8.586L8.707 8.293 7.293 9.707 12 14.414l4.707-4.707z" />
    </g>
  </svg>
);

export default SvgComponent;
