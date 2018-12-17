import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.414 3H7c-1.103 0-2 .898-2 2v10c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6.586L19.414 3zm1.587 12H7V5h11v3h3l.001 7z" />
      <path d="M3 6H1v13c0 1.103.897 2 2 2h15v-2H3V6z" />
      <path d="M11.47 8.47L8.939 11l2.531 2.531 1.06-1.061L11.061 11l1.469-1.469zM14.47 9.531L15.939 11l-1.469 1.47 1.06 1.061L18.061 11 15.53 8.47z" />
    </g>
  </svg>
);

export default SvgComponent;
