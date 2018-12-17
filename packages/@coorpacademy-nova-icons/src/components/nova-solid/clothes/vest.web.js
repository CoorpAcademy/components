import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M11 6.314L9.848 4.471A1 1 0 0 0 9 4H6a1 1 0 0 0-1 1v8.808l-1.929 4.821A1.001 1.001 0 0 0 4 20h5a.994.994 0 0 0 .707-.294L11 18.414v-12.1zM8 15a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 1 1 0 2zM19.929 18.629L18 13.808V5a1 1 0 0 0-1-1h-3a1 1 0 0 0-.848.471L12 6.314v12.1l1.293 1.292A.994.994 0 0 0 14 20h5a.999.999 0 0 0 .929-1.371zM15 15a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm0-4a1 1 0 1 1 0-2 1 1 0 1 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
