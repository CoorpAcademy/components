import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18H2V8h15.999v2H20V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h8v-2zM18 22c-1.077 0-2.063-.44-2.81-1.19L17 19h-5v5l1.763-1.763A6.036 6.036 0 0 0 18 24c3.309 0 6-2.691 6-6h-2c0 2.205-1.794 4-4 4z" />
      <path d="M22.239 13.76A5.939 5.939 0 0 0 18 12c-3.309 0-6 2.691-6 6h2c0-2.206 1.794-4 4-4 1.078 0 2.065.44 2.811 1.189L19 17h5v-5l-1.761 1.76z" />
    </g>
  </svg>
);

export default SvgComponent;
