import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.018 5.482l-5 1.63a.75.75 0 0 0-.518.713V11A1.5 1.5 0 1 0 9 12.5V8.369l3.5-1.141V10a1.5 1.5 0 1 0 1.5 1.5V6.195a.748.748 0 0 0-.982-.713zM20 7v13H7v2h13c1.103 0 2-.897 2-2V7h-2z" />
      <path d="M18 16V4c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2zM4 4h12l.001 12H4V4z" />
    </g>
  </svg>
);

export default SvgComponent;
