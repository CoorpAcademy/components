import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M19 3.001H5c-1.103 0-2 .898-2 2v14c0 1.103.897 2 2 2h14c1.104 0 2-.897 2-2v-14c0-1.103-.896-2-2-2zm-2.714 15L12 15.166l-4.285 2.835 1.994-4.584L6 10.001h4.286l1.714-4 1.715 4H18l-3.708 3.416 1.994 4.584z"
    />
  </svg>
);

export default SvgComponent;
