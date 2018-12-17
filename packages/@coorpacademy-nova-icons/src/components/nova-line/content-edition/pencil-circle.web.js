import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 22C6.486 22 2 17.513 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10zm0-18c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M8.707 12.535l2.828 2.829L8 16.071zM13.657 7.585a2 2 0 1 1 2.828 2.828l-4.243 4.243-2.828-2.829 4.243-4.242z"
    />
  </svg>
);

export default SvgComponent;
