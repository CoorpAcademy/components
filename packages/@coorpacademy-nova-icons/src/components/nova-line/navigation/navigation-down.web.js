import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 17.416L3.586 9.001 5 7.587l7 7 7-7 1.414 1.414z"
    />
    <path
      fill="currentColor"
      d="M12 12.416L3.586 4.001 5 2.587l7 7 7-7 1.414 1.414zM12 22.416l-8.414-8.415L5 12.587l7 7 7-7 1.414 1.414z"
    />
  </svg>
);

export default SvgComponent;
