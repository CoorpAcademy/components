import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 2H4c-1.103 0-2 .897-2 2v16c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2zm-2 13h-5c-.265 0-.519-.106-.707-.293L8.586 11H6V9h3c.265 0 .519.106.707.293L13.414 13H18v2zm0-4h-4V9h4v2z"
    />
  </svg>
);

export default SvgComponent;
