import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 10a2 2 0 0 0-4 0c0 .738.405 1.376 1 1.723V18c0 1.103-.897 2-2 2s-2-.897-2-2h2l-4-5v5c0 2.205 1.794 4 4 4s4-1.795 4-4v-6.277c.595-.347 1-.985 1-1.723z" />
      <path d="M17 8c0-2.243-2.636-4-6-4-2.12 0-4.493 1.016-5.837 2.123L2.6 4.2A.998.998 0 1 0 1 5v6c0 .379.214.726.553.894A.997.997 0 0 0 2.6 11.8l2.563-1.923C6.507 10.984 8.88 12 11 12c3.364 0 6-1.757 6-4zm-5 0a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
