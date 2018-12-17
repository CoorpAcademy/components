import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M15 3v2H9V3H2v12h20V3z" />
      <path d="M10 2h4v2h-4zM10.586 16l-6 6h2.828L11 18.414V22h2v-3.586L16.586 22h2.828l-6-6z" />
    </g>
  </svg>
);

export default SvgComponent;
