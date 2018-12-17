import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      d="M22.707 12.294l-6-6A1 1 0 0 0 16 6.001h-4v-3a1.002 1.002 0 0 0-1.707-.707l-9 9a.999.999 0 0 0 0 1.414l9 9a.996.996 0 0 0 1.09.217 1 1 0 0 0 .617-.924v-3h10a1 1 0 0 0 1-1v-4a1 1 0 0 0-.293-.707zM17 9.416l2.586 2.586H17V9.416zm-6 6.585a1 1 0 0 0-1 1v1.586l-6.586-6.586L10 5.416v1.586a1 1 0 0 0 1 1h4v5a1 1 0 0 0 1 1h5v2H11z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
