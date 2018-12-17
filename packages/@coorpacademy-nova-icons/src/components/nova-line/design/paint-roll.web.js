import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M19 6h-2V5c0-1.102-.897-2-2-2H4c-1.103 0-2 .898-2 2v4c0 1.103.897 2 2 2h11c1.103 0 2-.897 2-2V8h2v4h-9c-1.103 0-2 .898-2 2v2H7v5c0 1.103.897 2 2 2s2-.897 2-2v-5h-1v-2h9c1.103 0 2-.897 2-2V8c0-1.102-.897-2-2-2zM4 9V5h11l.001 4H4z"
      fill="#767676"
    />
  </svg>
);

export default SvgComponent;
