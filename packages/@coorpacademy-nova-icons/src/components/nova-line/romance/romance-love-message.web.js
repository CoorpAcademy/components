import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24h-24z" />
    <path
      d="M11.999 16.998h-8v-9h3v-2h-3v-1h3v-2h-3c-1.104 0-2 .897-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-6l-2 2zm-.003 4H3.999v-2h7.998l-.001 2z"
      fill="currentColor"
    />
    <path
      d="M19.999.998h-10c-1.104 0-2 .897-2 2v6a2 2 0 0 0 2 2h1v3a1 1 0 0 0 1.707.708l3.707-3.708h3.586a2 2 0 0 0 2-2v-6c0-1.103-.896-2-2-2zm0 8h-4a.997.997 0 0 0-.707.293l-.707.707h-1.586a1 1 0 0 0-1-1h-2v-6h10v6z"
      fill="currentColor"
    />
    <path
      d="M15.999 3.998a1 1 0 0 0-1 1 1 1 0 1 0-2 0c0 1 2 3 2 3s2-2 2-3a1 1 0 0 0-1-1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
