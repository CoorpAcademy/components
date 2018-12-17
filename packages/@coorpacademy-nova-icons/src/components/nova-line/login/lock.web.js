import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M4 4h6V2H4c-1.103 0-2 .897-2 2v6h2V4zM20 2h-6v2h6v6h2V4c0-1.103-.897-2-2-2zM4 14H2v6c0 1.103.897 2 2 2h6v-2H4v-6zM20 20h-6v2h6c1.103 0 2-.897 2-2v-6h-2v6z" />
      <path d="M12 6c-2.206 0-4 1.794-4 4v1H7v7h10v-7h-1v-1c0-2.206-1.794-4-4-4zm-2 4c0-1.102.897-2 2-2s2 .898 2 2v1h-4v-1zm5 6H9v-3h6v3z" />
    </g>
  </svg>
);

export default SvgComponent;
