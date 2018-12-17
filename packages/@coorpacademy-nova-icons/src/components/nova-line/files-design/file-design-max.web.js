import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M5 3.002h10v4h4v1h2V5.587l-4.586-4.585H5a2 2 0 0 0-2 2v5h2v-5zM19 21.002H5v-1H3v1c0 1.103.896 2 2 2h14c1.103 0 2-.897 2-2v-1h-2v1zM3 14.305l.168.251c.371.558 1.293.558 1.664 0L5 14.305v3.697h2v-7a1.001 1.001 0 0 0-1.832-.555L4 12.199l-1.168-1.752A1 1 0 0 0 1 11.002v7h2v-3.697zM14 18.002v-7a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v7h2v-2h2v2h2zm-4-4v-2h2v2h-2zM22.133 10.002H19.8l-1.234 2.057-1.233-2.057H15l2.4 4-2.4 4h2.333l1.233-2.056 1.234 2.056h2.333l-2.401-4z" />
    </g>
  </svg>
);

export default SvgComponent;
