import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10.76 9.002H2a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.374a8.518 8.518 0 0 1-5.24-4.626zm1.24 9.5a1.5 1.5 0 1 1-1.5-1.5v-2.771L7 15.372v4.13a1.5 1.5 0 1 1-1.5-1.5v-3.174c0-.326.209-.613.518-.713l5-1.632a.753.753 0 0 1 .983.713v5.306zM21.5 6.002c-.812 0-1.529.396-1.986.998l-2.562-1.024c.029-.154.048-.311.048-.474 0-.162-.019-.319-.048-.473l2.562-1.024a2.49 2.49 0 0 0 1.986.997c1.379 0 2.5-1.121 2.5-2.5 0-1.378-1.121-2.5-2.5-2.5S19 1.124 19 2.502c0 .031.008.059.009.089l-2.78 1.113a2.48 2.48 0 0 0-1.729-.702 2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5.672 0 1.279-.269 1.729-.701l2.78 1.113c-.001.03-.009.058-.009.088 0 1.379 1.121 2.5 2.5 2.5s2.5-1.121 2.5-2.5c0-1.378-1.121-2.5-2.5-2.5z" />
    </g>
  </svg>
);

export default SvgComponent;
