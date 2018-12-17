import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M20.937 16.649l-3-8A1.002 1.002 0 0 0 17 8h-1.557A3.95 3.95 0 0 0 16 6c0-2.206-1.795-4-4-4S8 3.794 8 6c0 .732.212 1.409.557 2H7c-.417 0-.79.259-.937.649l-3 8A1 1 0 0 0 3 17v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-.063-.351zM10 6c0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2s-2-.897-2-2zm9 14H5v-2.818L7.693 10h8.613L19 17.182V20z" />
      <path d="M12.5 12h-1.832L9.5 13.664V12H8v6h1.5v-1.665L10.668 18H12.5l-2.105-3z" />
      <path d="M12 13.5v3c0 .827.673 1.5 1.5 1.5H15c.827 0 1.5-.673 1.5-1.5v-2.25h-2.25v1.5H15v.75h-1.5v-3h3V12h-3c-.827 0-1.5.673-1.5 1.5z" />
    </g>
  </svg>
);

export default SvgComponent;
