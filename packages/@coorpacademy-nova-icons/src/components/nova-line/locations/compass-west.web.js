import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M12 3c-4.962 0-9 4.037-9 9s4.038 9 9 9 9-4.037 9-9-4.038-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z" />
      <path d="M14.574 9l-.837 3.413L12.875 9h-1.801l-.837 3.413L9.375 9h-1.75l1.718 7h1.8l-.018-.071.862-3.414.856 3.485h1.8l-.018-.071L16.375 9z" />
    </g>
  </svg>
);

export default SvgComponent;
