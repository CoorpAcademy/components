import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2 18.001c0 1.103.897 2 2 2h16c1.104 0 2-.897 2-2v-8H2v8zm13-6h4v2h-4v-2zm-10 0h7v2H5v-2zm0 3h5v2H5v-2zM20 4.001H4c-1.103 0-2 .897-2 2v2h20v-2c0-1.103-.896-2-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
