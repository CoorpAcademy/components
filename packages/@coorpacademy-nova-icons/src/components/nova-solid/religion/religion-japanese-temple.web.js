import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.002H0z" />
    <g fill="currentColor">
      <path d="M6 15h3v8H6zM19.382 7c.379 0 .725-.214.895-.553l1-2A.998.998 0 0 0 20.382 3H3.618a1 1 0 0 0-.894 1.447l1 2A.998.998 0 0 0 4.618 7H6v3H4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2V7h1.382zM11 10H9V7h2v3zm4 0h-2V7h2v3zM15 15h3v8h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
