import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19 20.277V13h-7.277a2.012 2.012 0 0 0-.723-.723V5H3.723A1.994 1.994 0 1 0 1 7.723v12.554c-.595.347-1 .986-1 1.723a1.994 1.994 0 1 0 3.723 1h12.555c.347.595.984 1 1.723 1a2 2 0 0 0 2-2A1.998 1.998 0 0 0 19 20.277zM9 21H3.723A2.012 2.012 0 0 0 3 20.277V15h5.277c.175.3.423.548.723.723V21zm0-8.723c-.3.176-.548.423-.723.723H3V7.723c.3-.175.548-.423.723-.723H9v5.277zM16.277 21H11v-5.277c.3-.175.548-.423.723-.723h5.278v5.277c-.3.174-.549.422-.724.723z" />
      <path d="M21.5 6c-.813 0-1.529.396-1.985.998l-2.563-1.024c.029-.154.048-.312.048-.474s-.019-.319-.048-.473l2.563-1.025A2.488 2.488 0 0 0 21.5 5C22.878 5 24 3.878 24 2.5S22.878 0 21.5 0 19 1.122 19 2.5c0 .031.008.059.009.09l-2.781 1.111A2.488 2.488 0 0 0 14.5 3C13.122 3 12 4.122 12 5.5S13.122 8 14.5 8c.671 0 1.278-.269 1.728-.701l2.781 1.112c-.001.031-.009.06-.009.089 0 1.378 1.122 2.5 2.5 2.5S24 9.878 24 8.5 22.878 6 21.5 6z" />
    </g>
  </svg>
);

export default SvgComponent;
