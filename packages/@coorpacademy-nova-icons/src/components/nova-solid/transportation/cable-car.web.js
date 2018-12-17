import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M6 20a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-9H6v9zm8-7h4v4h-4v-4zm-6 0h4v4H8v-4zM12 10h2V7.496l7.206-1.518-.412-1.956L14 5.452V3h-2v2.873L1.794 8.021l.412 1.958L12 7.916z" />
    </g>
  </svg>
);

export default SvgComponent;
