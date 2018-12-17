import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M12.007 8l1.493 4H17l-3 1.997L15.5 18 12 15.502 8.5 18l1.5-4.003L7 12h3.5z" />
      <path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M15 3H8V1H6v6h2V5h7z" />
    </g>
  </svg>
);

export default SvgComponent;
