import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M2.92 8H4v3h2V8h6v1h2V8h1.08l.084 1h2.006l-.174-2.083A.999.999 0 0 0 16 6h-2V5c0-2.757-2.243-5-5-5S4 2.243 4 5v1H2a.999.999 0 0 0-.996.917l-1 12A.997.997 0 0 0 1 20h9v-2H2.087L2.92 8zM6 5c0-1.654 1.346-3 3-3s3 1.346 3 3v1H6V5z" />
      <path d="M12 11v7c0 3.813 3.797 5.579 5.804 5.98l.196.04.196-.039C20.203 23.579 24 21.813 24 18v-7H12zm10 7c0 2.763-3.154 3.756-3.998 3.973C17.176 21.757 14 20.749 14 18v-5h8v5z" />
      <path d="M17 20h2v-2h2v-2h-2v-2h-2v2h-2v2h2z" />
    </g>
  </svg>
);

export default SvgComponent;
