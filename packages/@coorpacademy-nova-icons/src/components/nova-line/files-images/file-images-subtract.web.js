import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M14 17.001l-3-6-2 4-2-2-3 4z" />
      <circle cx={7} cy={10.001} r={2} />
      <path d="M18 4.586L13.414 0H2C.897 0 0 .898 0 2v18c0 1.103.897 2 2 2h12v-2H2V2h10v4h4l.001 11.002H18V4.586zM17 19h6v2h-6z" />
    </g>
  </svg>
);

export default SvgComponent;
