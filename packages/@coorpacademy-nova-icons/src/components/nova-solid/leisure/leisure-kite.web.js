import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24.001v24.002H0z" />
    <path
      fill="currentColor"
      d="M21.708 7.793l-5.5-5.5a1.03 1.03 0 0 0-1.414 0l-5.499 5.5a.999.999 0 0 0-.158 1.208l5.341 9.227A1.996 1.996 0 0 1 12.5 20c-1.103 0-2-.897-2-2 0-2.205-1.795-4-4-4C3.182 14 2 16.066 2 18v4h2v-4c0-1.346.818-2 2.5-2 1.103 0 2 .896 2 2 0 2.206 1.795 4 4 4 2.094 0 3.799-1.623 3.967-3.675l5.398-9.324a1 1 0 0 0-.157-1.208zM20 9h-4v7h-1V9h-4V8h4V4h1v4h4v1z"
    />
  </svg>
);

export default SvgComponent;
