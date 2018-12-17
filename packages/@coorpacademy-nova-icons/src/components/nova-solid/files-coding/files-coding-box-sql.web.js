import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12.042 10.771a.887.887 0 0 0-.885.886v1.77c0 .488.397.886.885.886a.887.887 0 0 0 .885-.886v-1.77a.887.887 0 0 0-.885-.886z" />
      <path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm-13.5 4.75H5.438a.438.438 0 0 0 0 .875h.875a2.19 2.19 0 0 1 2.188 2.189A2.19 2.19 0 0 1 6.313 16H3.251v-1.75h3.062a.437.437 0 1 0 0-.875h-.875a2.19 2.19 0 0 1-2.188-2.186A2.192 2.192 0 0 1 5.438 9h3.063v1.75zm5.57 5.958l-.892-.892a2.615 2.615 0 0 1-1.138.265 2.658 2.658 0 0 1-2.655-2.655v-1.77C9.386 10.191 10.577 9 12.042 9s2.656 1.191 2.656 2.656v1.77c0 .41-.101.792-.267 1.139l.892.891-1.252 1.252zm6.68-.708h-4.375V9h1.75v5.25h2.625V16z" />
    </g>
  </svg>
);

export default SvgComponent;
