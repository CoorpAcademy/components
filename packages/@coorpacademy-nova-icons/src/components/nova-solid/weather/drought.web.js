import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={5} cy={4.005} r={3} />
      <path d="M21.447 6.899A.997.997 0 0 0 22 6.005v-2a1 1 0 0 0-2 0v1.382l-2 1V3.505a1.5 1.5 0 0 0-3 0v5.882l-2-1V7.005a1 1 0 0 0-2 0v2c0 .379.214.726.553.894L15 11.623v2.382H2v8h20v-8h-4V8.623l3.447-1.724zM19 16.005v2h-2v2h-2v-2h-2v2h-2v-2H9v2H7v-2H5v-2h2v2h2v-2h2v2h2v-2h2v2h2v-2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
