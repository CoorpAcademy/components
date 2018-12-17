import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-.003 18H4V4h16l-.003 16z" />
      <path d="M7 13h2v4a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4h2a1.002 1.002 0 0 0 .707-1.707l-5-5a.999.999 0 0 0-1.414 0l-5 5A1 1 0 0 0 7 13zm5-4.586L14.586 11H14a1 1 0 0 0-1 1v4h-2v-4a1 1 0 0 0-1-1h-.586L12 8.414z" />
    </g>
  </svg>
);

export default SvgComponent;
