import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M16 2.001H8c-1.103 0-2 .898-2 2v17a1.002 1.002 0 0 0 1.707.707L12 17.415l4.293 4.293A1 1 0 0 0 18 21.001v-17c0-1.103-.896-2-2-2zm-3.293 13.293a.999.999 0 0 0-1.414 0L8 18.587v-3.172l4-4 4 4v3.172l-3.293-3.293z"
    />
  </svg>
);

export default SvgComponent;
