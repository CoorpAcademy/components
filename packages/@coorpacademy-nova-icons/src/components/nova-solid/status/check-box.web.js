import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M11.153 20.708l-7.824-7.824 4.596-4.596 3.004 3.004L15.741 6H4.042c-1.103 0-2 .898-2 2v12c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-9.069l-8.889 9.777z"
    />
    <path
      fill="currentColor"
      d="M11.085 17.81l-4.927-4.926 1.767-1.768 3.073 3.074 9.119-10.031 1.849 1.682z"
    />
  </svg>
);

export default SvgComponent;
