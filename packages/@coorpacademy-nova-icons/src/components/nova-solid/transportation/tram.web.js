import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002h24v24h-24z" />
    <g fill="currentColor">
      <path d="M8 20c0-.366-.106-.705-.277-1h7.555A1.978 1.978 0 0 0 15 20a2 2 0 0 0 4 0c0-.366-.105-.705-.277-1H20a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h1.277A1.987 1.987 0 0 0 4 20a2 2 0 0 0 4 0zm8-7h3v3h-3v-3zm-6 0h3v3h-3v-3zm-6 0h3v3H4v-3z" />
      <path d="M2 22h20v2H2zM18 8h-4.766l-1.333-2 1.333-2H15V2H9v2h2.432l-1.333 2 1.333 2H6v2h12z" />
    </g>
  </svg>
);

export default SvgComponent;
