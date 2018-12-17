import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22 6.002H2c-1.103 0-2 .897-2 2v9c0 1.102.897 2 2 2h20c1.103 0 2-.898 2-2v-9c0-1.103-.897-2-2-2zm-20 11v-9h20l.001 9H2z" />
      <path d="M3 11.002h.75v3H3v1.5h3v-1.5h-.75v-3H6v-1.5H3zM9.75 12.274L8.124 9.836a.75.75 0 0 0-1.374.416v5.25h1.5v-2.773l1.626 2.438a.75.75 0 0 0 1.374-.415v-5.25h-1.5v2.772zM13.5 9.502H12v6h1.5c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4.5v-3a1.501 1.501 0 0 1 0 3zM18 9.502h-1.5v6H18c1.654 0 3-1.346 3-3s-1.346-3-3-3zm0 4.5v-3a1.501 1.501 0 0 1 0 3z" />
    </g>
  </svg>
);

export default SvgComponent;
