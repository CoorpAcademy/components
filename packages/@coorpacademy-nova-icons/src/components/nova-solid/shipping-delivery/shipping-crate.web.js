import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M7 7h10v2H7zM7 11h10v2H7zM7 15h10v2H7zM17.586 19H6.414l-3 3h17.172zM19 6.414v11.172l3 3V3.414zM5 17.586V6.414l-3-3v17.172zM3.414 2l3 3h11.172l3-3z" />
    </g>
  </svg>
);

export default SvgComponent;
