import * as React from "react";

const SvgComponent = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2.001c-5.514 0-10 4.486-10 10s4.486 10 10 10 10-4.486 10-10-4.486-10-10-10zm5 11h-4v4h-2v-4H7v-2h4v-4h2v4h4v2z"
    />
  </svg>
);

export default SvgComponent;
