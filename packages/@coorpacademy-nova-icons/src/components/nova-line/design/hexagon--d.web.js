import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M15.303 2H8.697L5 4.465v15.07L8.697 22h6.605L19 19.535V4.465L15.303 2zm-6 2h5.395l1.5 1-1.5 1H9.303l-1.5-1 1.5-1zM10 8h4v12h-4V8zM7 6.869l1 .666v11.597l-1-.667V6.869zm9 12.263V7.535l1-.666v11.596l-1 .667z"
      fill="#767676"
    />
  </svg>
);

export default SvgComponent;
