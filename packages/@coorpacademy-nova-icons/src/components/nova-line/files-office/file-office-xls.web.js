import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5.133 3h10v4h4v1h2V5.586L16.547 1H5.133c-1.103 0-2 .898-2 2v5h2V3zM19.133 21h-14v-1h-2v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM10.133 10v8h5v-2h-3v-6zM18.633 12h3.5v-2h-3.5c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1h-3.5v2h3.5c1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1zM4.333 18l1.233-2.056L6.8 18h2.333l-2.401-4 2.401-4H6.8l-1.234 2.056L4.333 10H2l2.4 4L2 18z" />
    </g>
  </svg>
);

export default SvgComponent;
