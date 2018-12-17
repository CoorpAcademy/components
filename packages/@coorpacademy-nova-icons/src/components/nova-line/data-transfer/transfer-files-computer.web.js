import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 13.001l4-4h-3v-2h3v-2H9a1 1 0 0 0-1 1v3H5l4 4z" />
      <path d="M16 15.001H2v-5h1v-2H2a2 2 0 0 0-2 2v9c0 1.102.896 2 2 2h6v1H5v2h8v-2h-3v-1h6c1.104 0 2-.898 2-2v-6h-2v2zm-14 4v-2h14v2H2z" />
      <path d="M22.707 3.294l-3-3A.996.996 0 0 0 19 .001h-4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1v-7a.996.996 0 0 0-.293-.707zM21 10.001h-5v-8h2.586L21 4.415v5.586z" />
    </g>
  </svg>
);

export default SvgComponent;
