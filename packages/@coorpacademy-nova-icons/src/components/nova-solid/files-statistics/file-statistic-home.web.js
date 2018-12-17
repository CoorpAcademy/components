import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11 12.3V9.995h2v.947a8.952 8.952 0 0 1 4-.947c.338 0 .671.023 1 .059V4.581L13.414-.005H2c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h6.523a8.951 8.951 0 0 1-.523-3c0-.338.022-.67.059-.997H3v-2h2V6.995h2v9.002h1v-4.002h2v1.349a9.135 9.135 0 0 1 1-1.044zM12 .995l5 5h-5v-5z" />
      <path d="M17.707 12.289a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.411v4.585a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.585l1.293 1.292 1.414-1.414-6-6zM18 21.996h-2v-3h2v3z" />
    </g>
  </svg>
);

export default SvgComponent;
