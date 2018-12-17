import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M19 3.001H5c-1.104 0-2 .898-2 2v14c0 1.103.896 2 2 2h7c.819 0 1.835-.42 2.414-1L20 14.416c.58-.58 1-1.595 1-2.414v-7a2.002 2.002 0 0 0-2-2.001zm-14 16v-14h14v7h-4c-1.654 0-3 1.346-3 3v4H5zm9-1.414v-2.586c0-.552.449-1 1-1h2.586L14 17.587z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
