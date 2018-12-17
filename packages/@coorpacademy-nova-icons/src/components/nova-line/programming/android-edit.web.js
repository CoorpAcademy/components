import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 6a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1 4.963 4.963 0 0 0-.833-2.752l1.54-1.54L12.293.294l-1.54 1.54a4.959 4.959 0 0 0-5.506-.001L3.707.293 2.293 1.708l1.54 1.54A4.963 4.963 0 0 0 3 6zm5-3c1.304 0 2.416.836 2.829 2H5.171A3.006 3.006 0 0 1 8 3zM23.707 14.287l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.001 1.001 0 0 0-.263.465l-1 4a1 1 0 0 0 1.213 1.212l4-1a.998.998 0 0 0 .464-.263l7-7a.999.999 0 0 0 0-1.414zm-8.218 6.804l-2.114.528.528-2.113L17 16.409l1.586 1.585-3.097 3.097zM20 16.58l-1.586-1.586L20 13.409l1.586 1.585L20 16.58zM13 14v-4h1v2h2V9a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v7h2v-6h1v6a1 1 0 0 0 1 1h1v3h2v-3h2v-2H5v-5h6v4h2z" />
    </g>
  </svg>
);

export default SvgComponent;
