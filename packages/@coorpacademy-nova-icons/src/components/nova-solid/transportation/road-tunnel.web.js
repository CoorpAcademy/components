import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      fill="currentColor"
      d="M12 2C5.935 2 1 6.935 1 13v9h10v-2h2v2h10v-9c0-6.065-4.935-11-11-11zM3 13c0-4.963 4.038-9 9-9s9 4.037 9 9v5l-5-3.75V13c0-2.205-1.794-4-4-4s-4 1.795-4 4v1.25L3 18v-5zm7 1v-1c0-1.104.897-2 2-2s2 .896 2 2v1h-4zm3 4h-2v-2h2v2z"
    />
  </svg>
);

export default SvgComponent;
