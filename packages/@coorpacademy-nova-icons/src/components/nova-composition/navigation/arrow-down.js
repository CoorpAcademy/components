import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <g fill="none" fillRule="evenodd">
      <defs>
        <path id="prefix__a" d="M0 0h24v24H0z" />
      </defs>
      <path
        fill="currentColor"
        d="M23.8 6.3l-2.6-2.1c-.1-.2-.2-.2-.3-.2-.1 0-.3.1-.3.2L12 13.9 3.5 4.2c-.1-.1-.2-.2-.4-.2-.1 0-.2 0-.3.1L.2 6.3c-.1 0-.2.2-.2.3 0 .1 0 .3.1.4l11.5 12.9c.1.1.2.2.4.2.1 0 .3-.1.4-.2l11.5-13c.1-.1.1-.2.1-.3 0-.1-.1-.3-.2-.3z"
      />
    </g>
  </svg>
);

export default SvgComponent;
