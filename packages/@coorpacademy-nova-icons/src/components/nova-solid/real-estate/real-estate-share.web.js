import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path fill="currentColor" d="M23 7l-7-6-7 6h3v5h3V9h2v3h3V7z" />
    <path
      fill="#767676"
      d="M19 18h-8.586l.293-.293a.999.999 0 0 0 0-1.414l-1-1a1.002 1.002 0 0 0-1.078-.222L5 16.522V23h11c.266 0 .52-.105.707-.293l3-3A1.002 1.002 0 0 0 19 18zM3 15H1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1z"
    />
  </svg>
);

export default SvgComponent;
