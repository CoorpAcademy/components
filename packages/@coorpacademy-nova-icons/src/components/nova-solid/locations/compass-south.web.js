import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <path
      fill="currentColor"
      d="M12 3a9 9 0 1 0 .001 18.001A9 9 0 0 0 12 3zm3 7h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5S13.878 16 12.5 16H9v-2h3.5a.5.5 0 0 0 0-1h-1C10.122 13 9 11.878 9 10.5S10.122 8 11.5 8H15v2z"
    />
  </svg>
);

export default SvgComponent;
