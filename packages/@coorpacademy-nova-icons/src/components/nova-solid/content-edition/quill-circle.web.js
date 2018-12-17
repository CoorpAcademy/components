import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm1.982 12.364c-2.024 2.093-3.774 1.852-4.738 1.05L7 16.962v-1.149l1.625-1.164c-.554-1.044-.537-2.674 1.255-4.528a6.54 6.54 0 0 1 1.067-.868L13 11.298V8.216c2.035-.853 4-1.217 4-1.217s-.846 5.117-3.018 7.365z"
    />
  </svg>
);

export default SvgComponent;
