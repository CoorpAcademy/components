import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.526 12.15a1.003 1.003 0 0 0-.973-.044L14 13.382V12c0-1.104-.897-2-2-2H4c-1.103 0-2 .896-2 2v8c0 1.103.897 2 2 2h8c1.103 0 2-.897 2-2v-1.381l2.553 1.275a.992.992 0 0 0 .973-.043c.294-.182.474-.504.474-.851v-6a1 1 0 0 0-.474-.85zM4 20v-8h8l.001 8H4zm12-2.618l-2-1v-.763l2-1v2.763zM15 3h2v6h-2zM19 3h2v6h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
