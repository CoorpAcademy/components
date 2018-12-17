import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M20 17.003H4c-.55 0-1 .45-1 1v3c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-3c0-.55-.45-1-1-1zM4 15.003h16c.55 0 .73-.36.4-.8l-7.8-10.4c-.33-.439-.87-.439-1.2 0l-7.8 10.4c-.33.44-.15.8.4.8z" />
    </g>
  </svg>
);

export default SvgComponent;
