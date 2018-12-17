import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M21 3.003h-3c-.55 0-1 .45-1 1v16c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-16c0-.55-.45-1-1-1zM3.8 3.602c-.44-.329-.8-.149-.8.401v16c0 .55.36.73.8.4l10.4-7.801c.44-.33.44-.87 0-1.199L3.8 3.602z" />
    </g>
  </svg>
);

export default SvgComponent;
