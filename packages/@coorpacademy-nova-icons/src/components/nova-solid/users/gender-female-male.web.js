import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13.001 11c0-2.757-2.243-5-5-5s-5 2.243-5 5a5.007 5.007 0 0 0 4 4.898V19h-2v2h2v2h2v-2h2v-2h-2v-3.102a5.007 5.007 0 0 0 4-4.898zm-8 0c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z" />
      <path d="M15.001 2v2h3.586l-2.833 2.833A4.974 4.974 0 0 0 13.001 6v2c1.654 0 3 1.346 3 3s-1.346 3-3 3v2c2.757 0 5-2.243 5-5a4.964 4.964 0 0 0-.833-2.753l2.833-2.833V9h2V2h-7z" />
    </g>
  </svg>
);

export default SvgComponent;
