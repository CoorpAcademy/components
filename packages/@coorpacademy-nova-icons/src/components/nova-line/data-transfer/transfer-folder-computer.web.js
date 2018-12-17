import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 11.001l4-4H9v-2h2v-2H8a1 1 0 0 0-1 1v3H4l4 4z" />
      <path d="M16 15.001H2v-5h1v-2H2a2 2 0 0 0-2 2v9c0 1.102.896 2 2 2h6v1H5v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-8h-2v4zm-14 4v-2h14v2H2zM23 1.001h-4.586l-.707-.707A.996.996 0 0 0 17 .001h-3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm-1 6h-7v-5h1.586l.707.707a.996.996 0 0 0 .707.293h4v4z" />
    </g>
  </svg>
);

export default SvgComponent;
