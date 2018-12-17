import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.989 20.095c-1.519-.7-3.207-1.092-4.989-1.092s-3.471.392-4.989 1.092a1 1 0 0 0 .419 1.908h9.141a1 1 0 0 0 .418-1.908zM20 2.003H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.104-.897-2-2-2zm-8 10h-1v2H9v-2H6a1 1 0 0 1-.97-1.242l1-4A.999.999 0 0 1 7 6.003h3a1 1 0 0 1 1 1v3h1v2zm7 2h-2.442L15 11.783v2.22h-2v-8h2v2.22l1.558-2.22H19l-2.807 4 2.807 4z" />
      <path d="M7.281 10.003H9v-2H7.781z" />
    </g>
  </svg>
);

export default SvgComponent;
