import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M13 10h2v2h-2zM9 10h2v2H9zM9 7h6v2H9z" />
      <path d="M12 2a8 8 0 0 0-8 8c0 4.418 8 12 8 12s8-7.582 8-12a8 8 0 0 0-8-8zm3.592 13.29L13.974 13h-3.957l-1.608 2.288-.818-.575L8.795 13H8V7a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6h-.801l1.209 1.711-.816.579z" />
    </g>
  </svg>
);

export default SvgComponent;
