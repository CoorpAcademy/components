import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 16a7 7 0 0 1 7-7c1.488 0 2.866.469 4 1.261v-5.26c0-1.102-.897-2-2-2h-2v-3h-2v3H6v-3H4v3H2c-1.103 0-2 .898-2 2v13c0 1.103.897 2 2 2h8.26A6.966 6.966 0 0 1 9 16zM2 5.001h16v3H2v-3z" />
      <path d="M23.414 22l-3.247-3.247c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.415 23.414 22zM13 16c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.345-3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
