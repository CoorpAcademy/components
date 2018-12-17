import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M22.768 7.359A1.002 1.002 0 0 0 22 7h-6V3a1 1 0 0 0-1-1h-3a1 1 0 0 0-.919.605L8.341 9H8a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-.522l3.629 1.451A.999.999 0 0 0 12 20h8c.483 0 .897-.346.984-.821l2-11a1.004 1.004 0 0 0-.216-.82zM6 18H4v-8h2v8zm13.166 0h-6.974L8 16.323V11h1c.4 0 .762-.238.919-.606L12.659 4H14v4a1 1 0 0 0 1 1h5.802l-1.636 9z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
