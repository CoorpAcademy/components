import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <g fill="currentColor">
      <path d="M12 13.023v-8a3 3 0 0 0-6 0v8c-1.207.913-2 2.346-2 3.977a5 5 0 1 0 10 0c0-1.631-.792-3.064-2-3.977zM9 19a2 2 0 0 1-2-2 1.99 1.99 0 0 1 1-1.723V5.023h2v10.255c.596.346 1 .984 1 1.723A2 2 0 0 1 9 19zM16 3.022h4v2h-4zM16 7.022h2v2h-2zM16 11.022h2v2h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
