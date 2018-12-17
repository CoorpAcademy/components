import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002 0h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M6.506 12L11 6.222 15.495 12h1.9L11.75 4.743V1h-1.5v3.743L4.606 12zM20 13H4a4 4 0 0 0 0 8h16a4 4 0 0 0 0-8zM8 15h4v1H8v-1zm-4 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm10 0H7v-1h7v1zm6 0h-4v-1h4v1zm1-3h-7v-1h7v1z"
    />
  </svg>
);

export default SvgComponent;
