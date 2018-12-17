import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M2 10c0-2.021.759-3.864 2-5.274V10h2.279l2.211 6.633L14 12.5V6h-3V2.069c3.94.495 7 3.859 7 7.931 0 .276-.014.55-.042.819l1.99.202c.034-.335.052-.676.052-1.021 0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10v-2c-4.411 0-8-3.589-8-8zm10-2v3.5l-2.49 1.867L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3z" />
      <path d="M21.5 19a2.49 2.49 0 0 0-1.986.998l-2.562-1.024c.03-.154.048-.312.048-.474s-.018-.32-.048-.473l2.562-1.025A2.492 2.492 0 0 0 21.5 18c1.378 0 2.5-1.122 2.5-2.5S22.878 13 21.5 13 19 14.122 19 15.5c0 .03.008.059.009.089l-2.781 1.112A2.486 2.486 0 0 0 14.5 16c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5c.671 0 1.279-.269 1.728-.701l2.781 1.112c-.001.031-.009.059-.009.089 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z" />
    </g>
  </svg>
);

export default SvgComponent;
