import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M13 5.298V10l-2.916-2.916c-.548.404-1.066.828-1.519 1.28-3.8 3.798-3.745 6.909-2.57 8.64L3 20v3l4.641-4.641c1.805.782 4.629.442 7.995-2.924C19.879 11.191 22 2 22 2s-4.752 1.103-9 3.298z"
    />
  </svg>
);

export default SvgComponent;
