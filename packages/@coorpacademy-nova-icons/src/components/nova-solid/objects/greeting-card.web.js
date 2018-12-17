import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M19 2H6v.007c-.59 0-1 .466-1 .993v14c0 .396.232.754.594.914l9 4A1 1 0 0 0 16 21v-3h3a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-8 12.2V16l-1-.627V13.8L8 13l2.5-6 2.5 8-2-.8zm7 1.8h-2V7a.999.999 0 0 0-.594-.914L10.713 4H18v12z"
    />
  </svg>
);

export default SvgComponent;
