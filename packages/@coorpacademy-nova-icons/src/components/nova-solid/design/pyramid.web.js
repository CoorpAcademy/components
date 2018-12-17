import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="#767676" d="M12 2L2 17l10 5 10-5L12 2zm0 18l-7-4 7-11v15z" />
  </svg>
);

export default SvgComponent;
