import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M16.57 22.001a1 1 0 0 0 .419-1.908c-1.519-.7-3.207-1.092-4.989-1.092s-3.471.392-4.989 1.092a1 1 0 0 0 .419 1.908h9.14zM14 18.001H4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v6h-2v-6H4v12h10v2z"
      fill="currentColor"
    />
    <path
      fill="currentColor"
      d="M19.465 17.779l-4.243-1.415 1.414-1.414-3.535-3.535 1.414-1.414 2.828 2.828 2.829-1.414L23 14.243z"
    />
  </svg>
);

export default SvgComponent;
