import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.002h24.001v24.001H-.002z" />
    <g fill="currentColor">
      <path d="M12 13.023v-8a3.001 3.001 0 0 0-6 0v8c-1.207.913-2 2.346-2 3.977 0 2.762 2.238 5 5 5s5-2.238 5-5c0-1.631-.793-3.064-2-3.977zM9 19a2 2 0 0 1-2-2 1.99 1.99 0 0 1 1-1.723v-3.255h2v3.255c.596.346 1 .984 1 1.723a2 2 0 0 1-2 2zM16 3.022h2v2h-2zM16 7.022h2v2h-2zM16 11.022h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
