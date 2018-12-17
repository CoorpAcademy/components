import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M20 2H6a1 1 0 0 0-1 1v2H3v2h2v2H3v2h2v2H3v2h2v2H3v2h2v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 18H7v-1h1v-2H7v-2h1v-2H7v-2h1V9H7V7h1V5H7V4h12v16z" />
      <path d="M12.892 14.694l-1.599 1.599 1.414 1.414L14 16.414l1.293 1.292 1.414-1.414-1.599-1.599C16.236 14.059 17 12.471 17 10.5 17 7.935 15.711 6 14 6s-3 1.935-3 4.5c0 1.971.764 3.559 1.892 4.194zM15 8a1 1 0 1 1 .002 1.998A1 1 0 0 1 15 8z" />
    </g>
  </svg>
);

export default SvgComponent;
