import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <g fill="currentColor">
      <path d="M12 18c.433-.252 5.119-2.777 5.119-6.236 0-3.047-3.989-4.162-5.119-.163-1.13-4-5.119-2.885-5.119.163C6.881 14.971 12 18 12 18z" />
      <path d="M21 3h-3V1h-2v6h2V5h3v15H3V5h2V3H3a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h18a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z" />
      <path d="M15 3H8V1H6v6h2V5h7z" />
    </g>
  </svg>
);

export default SvgComponent;
