import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M9.293 15.294L7.5 17.086l-1.793-1.792-1.414 1.414L6.086 18.5l-1.793 1.794 1.414 1.414L7.5 19.914l1.793 1.794 1.414-1.414L8.914 18.5l1.793-1.792zM15 18.586l-1.293-1.292-1.414 1.414 2 2a1 1 0 0 0 1.414 0l4-4-1.414-1.414L15 18.586zM4 3h4v2H4zM10 3h4v2h-4zM16 3h4v2h-4zM4 7h4v2H4zM10 7h4v2h-4zM16 7h4v2h-4zM4 11h4v2H4zM10 11h4v2h-4zM16 11h4v2h-4z" />
    </g>
  </svg>
);

export default SvgComponent;
