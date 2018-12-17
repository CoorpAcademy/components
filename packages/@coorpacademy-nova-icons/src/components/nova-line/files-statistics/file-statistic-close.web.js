import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 14.417l2-2 1.293 1.293a.997.997 0 0 0 1.414 0l3-3-1.414-1.414L10 11.59l-1.293-1.294a1 1 0 0 0-1.414 0L6 11.59V8.003H4v9h10v-2H6v-.586z" />
      <path d="M18 4.586L13.414 0H2C.897 0 0 .897 0 2v18.002c0 1.102.897 2 2 2h12v-2H2V2h10v4h4v9.009h2V4.586z" />
      <path d="M23.707 17.716l-1.414-1.413L20 18.596l-2.293-2.293-1.414 1.413 2.293 2.295-2.293 2.292 1.414 1.413L20 21.424l2.293 2.292 1.414-1.413-2.293-2.292z" />
    </g>
  </svg>
);

export default SvgComponent;
