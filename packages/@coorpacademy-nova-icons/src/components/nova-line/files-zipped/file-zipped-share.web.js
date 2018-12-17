import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M6 4h2v2H6zM4 6h2v2H4zM6 8h2v2H6zM4 10h2v2H4z" />
      <path d="M2 2h2v2h2V2h8l.001 9H16V2c0-1.104-.897-2-2-2H2C.897 0 0 .896 0 2v16c0 1.103.897 2 2 2h8v-2H2V2zM21.5 19a2.49 2.49 0 0 0-1.986.998l-2.562-1.024c.03-.155.048-.312.048-.474s-.018-.318-.048-.473l2.562-1.025A2.492 2.492 0 0 0 21.5 18c1.378 0 2.5-1.122 2.5-2.5S22.878 13 21.5 13 19 14.122 19 15.5c0 .031.008.059.009.089l-2.781 1.112A2.488 2.488 0 0 0 14.5 16c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5c.671 0 1.278-.27 1.728-.701l2.781 1.112c-.001.031-.009.059-.009.089 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z" />
    </g>
  </svg>
);

export default SvgComponent;
