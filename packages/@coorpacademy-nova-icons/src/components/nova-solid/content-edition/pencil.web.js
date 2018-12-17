import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <g fill="currentColor">
      <path d="M20.28 8.155l.801-.801a3.14 3.14 0 0 0 0-4.436c-1.185-1.184-3.25-1.185-4.436 0l-.808.808 4.443 4.429zM18.858 9.575l-9.109 9.109c-.078.077-.164.14-.26.188l-6.043 3.022a1 1 0 0 1-1.341-1.342l3.02-6.043c.049-.096.112-.182.188-.26l9.109-9.109 4.436 4.435z" />
    </g>
  </svg>
);

export default SvgComponent;
