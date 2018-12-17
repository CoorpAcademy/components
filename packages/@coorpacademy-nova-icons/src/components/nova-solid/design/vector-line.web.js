import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M8 14H4c-1.103 0-2 .898-2 2v4c0 1.103.897 2 2 2h4c1.103 0 2-.897 2-2v-4c0-1.102-.897-2-2-2zM20 2h-4c-1.103 0-2 .898-2 2v4c0 1.102.897 2 2 2h4c1.103 0 2-.898 2-2V4c0-1.102-.897-2-2-2zM11.208 14.207l-1.414-1.413 3-3.001 1.414 1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
