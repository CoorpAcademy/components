import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M17.94 10.004c.037-.33.06-.664.06-1.003 0-4.962-4.037-9-9-9s-9 4.038-9 9 4.038 9 9 9c.34 0 .676-.022 1.006-.059a7.999 7.999 0 0 1 7.934-7.938zM8 9.536V4.001h2v4.465l2.555 1.703-1.109 1.664L8 9.536z" />
      <path d="M18.003 12c-3.309 0-6 2.694-6 6 0 3.309 2.691 6 6 6 3.308 0 6-2.691 6-6 0-3.306-2.692-6-6-6zm1 10h-2v-4h2v4zm-1-4.999a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
    </g>
  </svg>
);

export default SvgComponent;
