import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <defs>
        <path id="prefix__a" d="M0 0h24v24H0z" />
      </defs>
      <path
        fill="currentColor"
        d="M.2 17.7l2.6 2.1c.1.2.2.2.3.2.1 0 .3-.1.3-.2l8.5-9.7 8.5 9.7c.1.1.2.2.3.2.1 0 .3 0 .4-.1l2.6-2.1c.1-.1.2-.2.2-.3 0-.1 0-.3-.1-.4L12.4 4.2c-.1-.1-.3-.2-.4-.2-.1 0-.3.1-.4.2L.1 17.1c-.1.1-.1.2-.1.3 0 .1.1.3.2.3z"
      />
    </g>
  </svg>
);

export default SvgComponent;
