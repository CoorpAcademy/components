import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M12.5 13.003H11v1h1.5a.5.5 0 0 0 0-1zM11 11.003h1.5a.5.5 0 0 0 0-1H11v1z" />
      <path d="M21 7.435V5.003c0-.551-.448-1-1-1H4c-.552 0-1 .449-1 1v2.432a4.99 4.99 0 0 0-3 4.568 4.988 4.988 0 0 0 3 4.568v2.432a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2.432a4.99 4.99 0 0 0 3-4.568 4.99 4.99 0 0 0-3-4.568zm-6 6.068c0 1.207-.86 2.217-2 2.449v1.051h-2v-1H9v-8h2v-1h2v1.051c1.14.232 2 1.243 2 2.449 0 .566-.195 1.082-.513 1.5.318.419.513.935.513 1.5z" />
    </g>
  </svg>
);

export default SvgComponent;
