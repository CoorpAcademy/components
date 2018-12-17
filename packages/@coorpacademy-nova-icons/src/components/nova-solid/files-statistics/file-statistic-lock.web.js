import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.104.897 2.001 2 2.001h10v-4l-9 .002v-2h2V7h2v9.002h1V12h2v4.001h1V10h2v2.409a6.992 6.992 0 0 1 5-3.329V4.586zM12 6V1l5 5h-5z" />
      <path d="M23 15.001c0-2.206-1.794-4-4-4s-4 1.794-4 4a1 1 0 0 0-1 1v7.001a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-7.001a1 1 0 0 0-1-1zm-4-2c1.103 0 2 .897 2 2h-4c0-1.103.897-2 2-2zm3 9.001h-6v-5.001h6v5.001z" />
      <circle cx={19} cy={18.995} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
