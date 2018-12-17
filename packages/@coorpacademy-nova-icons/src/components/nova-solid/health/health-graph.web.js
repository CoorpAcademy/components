import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M18 11.415l-3.917-3.917-4 5L7 9.415 5.414 11H2v9c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2V9h-1.586L18 11.415zM7 20H5v-3h2v3zm4 0H9v-5h2v5zm4.001 0h-2v-3h2v3zm4 0h-2v-5h2v5z" />
      <path d="M20 2H4c-1.103 0-2 .898-2 2v5h2.586L7 6.586l2.917 2.917 4-5L18 8.586 19.586 7H22V4c0-1.102-.896-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
