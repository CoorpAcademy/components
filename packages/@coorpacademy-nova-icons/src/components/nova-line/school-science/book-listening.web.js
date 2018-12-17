import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 13h-1v-3c0-4.962-4.038-9-9-9s-9 4.038-9 9v3H2c-1.103 0-2 .898-2 2v4c0 1.104.897 2 2 2h2a1 1 0 0 0 1-1V10c0-3.859 3.14-7 7-7s7 3.141 7 7v10a1 1 0 0 0 1 1h2c1.103 0 2-.896 2-2v-4c0-1.102-.897-2-2-2zM3 19H2v-4h1v4zm18 0v-4h1l.001 4H21z" />
      <path d="M17.493 9.13a.997.997 0 0 0-1.007.013L12 11.834 7.515 9.143A.999.999 0 0 0 6 10v7a1 1 0 0 0 .485.858l5 3a1.002 1.002 0 0 0 1.03 0l5-3A1 1 0 0 0 18 17v-7c0-.36-.194-.692-.507-.87zM8 11.767l3 1.8v4.668l-3-1.801v-4.667zm8 4.667l-3 1.801v-4.668l3-1.8v4.667z" />
    </g>
  </svg>
);

export default SvgComponent;
