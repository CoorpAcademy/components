import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.126 10.75h-.875v1.75h.875a.876.876 0 0 0 0-1.75z" />
      <path d="M22.001 6h-20a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM5.876 14.25h-.875V16h-1.75V9h2.625c1.447 0 2.625 1.177 2.625 2.625S7.323 14.25 5.876 14.25zm8.75 1.75h-1.75v-2.625h-1.75V16h-1.75V9h1.75v2.625h1.75V9h1.75v7zm3.5-1.75h-.875V16h-1.75V9h2.625c1.447 0 2.625 1.177 2.625 2.625s-1.178 2.625-2.625 2.625z" />
      <path d="M5.876 10.75h-.875v1.75h.875a.876.876 0 0 0 0-1.75z" />
    </g>
  </svg>
);

export default SvgComponent;
