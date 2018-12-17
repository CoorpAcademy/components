import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M13.576 15.251l-3.535.707.707-3.535 8.485-8.485a2 2 0 1 1 2.828 2.828l-8.485 8.485z"
    />
    <path
      fill="currentColor"
      d="M12 17.096v.903H4v-12h8V9.05l2-2V3.999a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3.303l-2 .4z"
    />
  </svg>
);

export default SvgComponent;
