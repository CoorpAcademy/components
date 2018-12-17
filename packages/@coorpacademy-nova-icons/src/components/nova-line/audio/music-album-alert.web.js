import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M11.018 12.482l-5 1.63a.75.75 0 0 0-.518.713V18A1.5 1.5 0 1 0 7 19.5v-4.131l3.5-1.141V17a1.5 1.5 0 1 0 1.5 1.5v-5.306a.747.747 0 0 0-.982-.712z" />
      <path d="M14 9H2c-1.103 0-2 .898-2 2v11c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2V11c0-1.102-.897-2-2-2zM2 22V11h12l.001 11H2zM18 2h2v6h-2z" />
      <circle cx={19} cy={10} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
