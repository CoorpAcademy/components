import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M21.707 6.293l-1.74-1.74A3.006 3.006 0 0 0 17 2a3.004 3.004 0 0 0-2.953 2.471C13.707 4.684 13.029 5 12 5c-1.146 0-3.848-1.638-5.4-2.8A.999.999 0 0 0 5 3c0 2.602.383 4.544.999 6H11v1H6.491c1.164 1.957 2.857 2.729 4.509 2.934V16H8.414l-1.707-1.707A1.002 1.002 0 0 0 6 14H3a1 1 0 0 0-.707 1.706L3.586 17l-1.293 1.293A1.002 1.002 0 0 0 3 20h3a.994.994 0 0 0 .707-.294L8.414 18H11v4h2v-4h4v3l4-4-4-4v3h-4v-3.07c3.307-.432 4.595-2.986 4.914-4.93H21a1 1 0 0 0 .707-1.707z"
    />
  </svg>
);

export default SvgComponent;
