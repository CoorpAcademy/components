import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12.5 15H11v1h1.5a.5.5 0 1 0 0-1zM11 13h1.5a.5.5 0 1 0 0-1H11v1zM22 7.003v-2c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v2h20zm-14-3a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2zm-3 0a1.001 1.001 0 0 1 0 2 1 1 0 0 1 0-2z" />
      <path d="M2 8.003v11c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-11H2zM15 15.5c0 1.206-.86 2.217-2 2.449V19h-2v-1H9v-8h2V9h2v1.051c1.14.232 2 1.242 2 2.449 0 .565-.195 1.082-.513 1.5.318.419.513.936.513 1.5z" />
    </g>
  </svg>
);

export default SvgComponent;
