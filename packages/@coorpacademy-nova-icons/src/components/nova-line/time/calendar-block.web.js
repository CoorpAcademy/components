import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18H2V8h15.999v2.003L20 10.002V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.898 0 5v13c0 1.103.897 2 2 2h8v-2z" />
      <path d="M18 11.994c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.74 0 1.424.215 2.019.567l-5.452 5.452A3.947 3.947 0 0 1 14 17.994c0-2.205 1.794-4 4-4zm0 8c-.74 0-1.424-.215-2.019-.567l5.452-5.452c.352.595.567 1.279.567 2.019 0 2.206-1.794 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
