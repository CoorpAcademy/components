import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24.001v24.001H0z" />
    <g fill="currentColor">
      <path d="M17.816 20c.112-.314.184-.647.184-1v-8a2.98 2.98 0 0 0-1-2.219V4h1V2H6v2h1v4.781A2.98 2.98 0 0 0 6 11v8c0 .353.072.686.185 1H5v2h14v-2h-1.184zM9 4h6v4h-2V7h1V5h-4v2h1v1H9V4zm0 16c-.551 0-1-.448-1-1v-8c0-.552.449-1 1-1h6c.551 0 1 .448 1 1v8c0 .552-.449 1-1 1H9z" />
      <path d="M10 16a2 2 0 1 0 4 0c0-1.104-2-4-2-4s-2 2.896-2 4z" />
    </g>
  </svg>
);

export default SvgComponent;
