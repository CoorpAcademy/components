import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M18.998 1.998h-5c-1.654 0-3 1.346-3 3v8.626c-2.969 3.421-6.137 6.313-7 6.374h-2v2h2c1.69 0 4.783-2.976 7-5.373v5.373h2v-7h7v7h2v-17c0-1.654-1.346-3-3-3zm-6 11v-8c0-.55.449-1 1-1h5c.551 0 1 .45 1 1v8h-7z" />
      <path d="M13.998 5.998h5v2h-5z" />
    </g>
  </svg>
);

export default SvgComponent;
