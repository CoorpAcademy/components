import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <g fill="currentColor">
      <path d="M20 6V4h-2V3h1V1h-6V0h-2v1H5v2h1v1H4v2h2v3H4v2h2v1c0 1.103.896 2 2 2h1v-2H8V8h8v6c1.104 0 2-.897 2-2v-1h2V9h-2V6h2zM8 6V3h8v3H8z" />
      <path d="M16.651 16.241a1 1 0 0 0-1.206-.073L14 17.131V13a1 1 0 0 0-1.687-.725C11.592 12.957 8 16.488 8 19c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.557-1.211-2.64-1.349-2.759zM13 22c-1.654 0-3-1.346-3-3 0-.803.929-2.197 2-3.473V19a1 1 0 0 0 1.554.832l2.246-1.497c.112.2.2.432.2.665 0 1.654-1.346 3-3 3z" />
    </g>
  </svg>
);

export default SvgComponent;
