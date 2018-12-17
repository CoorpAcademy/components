import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={8} cy={22} r={2} />
      <circle cx={16} cy={22} r={2} />
      <path d="M20 3.999c-.466 0-.87.322-.975.776L18.05 9H14v2h3.589l-1.384 6H7.781l-.75-3H4.969l1.061 4.243A1 1 0 0 0 7 19h10a1 1 0 0 0 .975-.775l2.821-12.227H24v-2h-4z" />
      <path d="M11 11V8L9 6v4H5V6L3 8v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1z" />
      <path d="M12.293 7.707l1.414-1.414-6-6a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L7 2.414l5.293 5.293z" />
    </g>
  </svg>
);

export default SvgComponent;
