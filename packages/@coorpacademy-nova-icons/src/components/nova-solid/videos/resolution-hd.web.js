import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16.989 20.095c-1.519-.7-3.207-1.092-4.989-1.092s-3.471.392-4.989 1.092a1 1 0 0 0 .419 1.908h9.141a1 1 0 0 0 .418-1.908zM15 8.003v4c1.103 0 2-.897 2-2s-.897-2-2-2z" />
      <path d="M20 2.003H4c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-12c0-1.104-.897-2-2-2zm-9 12H9v-3H7v3H5v-8h2v3h2v-3h2v8zm4 0h-2v-8h2c2.206 0 4 1.795 4 4s-1.794 4-4 4z" />
    </g>
  </svg>
);

export default SvgComponent;
