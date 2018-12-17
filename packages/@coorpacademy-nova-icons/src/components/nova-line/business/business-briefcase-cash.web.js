import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 6V5h-2v1h-2V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H6V5H4v1c-1.104 0-2 .897-2 2v12c0 1.103.896 2 2 2h16c1.104 0 2-.897 2-2V8c0-1.103-.896-2-2-2zM10 5h4v1h-4V5zm10 15H4V8h16v12z" />
      <path d="M13 9h-2v1.051c-1.14.232-2 1.242-2 2.449 0 1.378 1.121 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1h2v-1.051c1.14-.232 2-1.243 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15v-2h-2V9z" />
    </g>
  </svg>
);

export default SvgComponent;
