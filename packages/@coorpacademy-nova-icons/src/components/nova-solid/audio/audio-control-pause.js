import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.003c-5.514 0-10 4.486-10 10 0 5.513 4.486 10 10 10s10-4.487 10-10c0-5.514-4.486-10-10-10zm-1 15H7v-9h4v9zm6 0h-4v-9h4v9z"
    />
  </svg>
);

export default SvgComponent;
