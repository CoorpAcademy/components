import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M21.395 9.082l-.005-.003-.002-.001L2.811 1.082 2.02 2.918 16.147 9H6c-2.206 0-4 1.795-4 4v6a1 1 0 0 0 1 1h2.185c.414 1.162 1.513 2 2.815 2s2.401-.838 2.815-2h3.369c.414 1.162 1.514 2 2.815 2s2.401-.838 2.815-2H21a1 1 0 0 0 1-1v-9c0-.412-.25-.764-.605-.918zM4 13c0-1.104.897-2 2-2h2v5a2.993 2.993 0 0 0-2.815 2H4v-5zm4 7c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm9 0c-.551 0-1-.449-1-1s.449-1 1-1 1 .449 1 1-.449 1-1 1zm3-2h-.185c-.414-1.162-1.514-2-2.815-2s-2.401.838-2.815 2h-3.369a2.979 2.979 0 0 0-.815-1.22V11h10v7z" />
      <path d="M5 12h2v2H5z" />
    </g>
  </svg>
);

export default SvgComponent;
