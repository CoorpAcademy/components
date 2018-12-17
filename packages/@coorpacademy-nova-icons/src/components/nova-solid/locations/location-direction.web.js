import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      fill="currentColor"
      d="M19.906 18.577l-7-15a.999.999 0 0 0-1.812.001l-7 15a1 1 0 0 0 1.3 1.342L12 17.087l6.606 2.831a.999.999 0 0 0 1.3-1.341zm-8.3-3.497l-4.592 1.968L12 6.365V15a.999.999 0 0 0-.394.08z"
    />
  </svg>
);

export default SvgComponent;
