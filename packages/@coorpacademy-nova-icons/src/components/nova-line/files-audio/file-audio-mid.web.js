import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.414 1.003H5c-1.103 0-2 .897-2 2v5h2v-5h10v4h4v1h2V5.589l-4.586-4.586zM19 21.003H5v-1H3v1c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM17 10.003h-2v8h2c2.206 0 4-1.794 4-4 0-2.205-1.794-4-4-4zm0 6v-4c1.103 0 2 .897 2 2s-.897 2-2 2zM10 16.003v2h4v-2h-1v-4h1v-2h-4v2h1v4zM5 14.306l.168.252c.371.557 1.293.557 1.664 0L7 14.306v3.697h2v-7a1.002 1.002 0 0 0-1.832-.555L6 12.2l-1.168-1.752A1 1 0 0 0 3 11.003v7h2v-3.697z" />
    </g>
  </svg>
);

export default SvgComponent;
