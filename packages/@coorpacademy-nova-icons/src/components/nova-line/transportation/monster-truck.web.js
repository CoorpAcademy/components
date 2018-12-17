import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M21 13.278V9h-2v4h-1V7c0-1.104-.897-2-2-2h-1V3H9v2H8c-1.103 0-2 .896-2 2v6H5V9H3v4.278c-.595.347-1 .985-1 1.722v4a1 1 0 0 0 1 1h1a2 2 0 0 0 4 0h8a2 2 0 0 0 4 0h1a1 1 0 0 0 1-1v-4c0-.737-.405-1.375-1-1.722zM16 7v3H8V7h8zM4 18v-3h2v3H4zm4 0v-6h8v6H8zm12 0h-2v-3h2v3z" />
      <path d="M9 13h2v4H9zM13 13h2v4h-2z" />
    </g>
  </svg>
);

export default SvgComponent;
