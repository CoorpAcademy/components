import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.002-.002h24.001V24H-.002z" />
    <g fill="currentColor">
      <path d="M6 8h6v2H6z" />
      <path d="M15 3.102V2h-2v9H6a1 1 0 0 0-1 1c0 2.757 2.243 5 5 5 .199 0 .391-.029.584-.053a3.978 3.978 0 0 1 3.384-1.943c.46-.609.796-1.316.94-2.096C17.232 12.479 19 10.445 19 8a5.007 5.007 0 0 0-4-4.898z" />
      <path d="M14 16a2.992 2.992 0 0 0-2.816 2H8.183l.074-.259a5.976 5.976 0 0 1-1.817-.92l-1.4 4.904 1.922.55L7.611 20h3.572a2.994 2.994 0 0 0 2.816 2A3 3 0 0 0 14 16z" />
    </g>
  </svg>
);

export default SvgComponent;
