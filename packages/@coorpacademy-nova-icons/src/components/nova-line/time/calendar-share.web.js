import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M10 18H2V8h15.999v3H20V5c0-1.102-.897-2-2-2h-1V0h-2v5h-1V3H7V0H5v5H4V3H2C.897 3 0 3.897 0 5v13c0 1.103.897 2 2 2h8v-2z" />
      <path d="M21.5 19c-.813 0-1.529.396-1.985.998l-2.563-1.024c.029-.154.048-.312.048-.474s-.019-.32-.048-.473l2.563-1.025A2.488 2.488 0 0 0 21.5 18c1.378 0 2.5-1.122 2.5-2.5S22.878 13 21.5 13 19 14.121 19 15.5c0 .03.008.059.009.089l-2.781 1.112A2.488 2.488 0 0 0 14.5 16c-1.378 0-2.5 1.122-2.5 2.5s1.122 2.5 2.5 2.5c.671 0 1.278-.269 1.728-.701l2.781 1.112c-.001.03-.009.058-.009.089 0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5z" />
    </g>
  </svg>
);

export default SvgComponent;
