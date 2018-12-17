import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 8c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 14c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z" />
      <path d="M17 11l-1 2-1-2h-2l2 4h-2v2h2v1h-2v2h2v1h2v-1h2v-2h-2v-1h2v-2h-2l2-4z" />
      <path d="M8 11H7V7h4v1h2V7h4.768C16.855 2.998 13.274 0 9 0 4.038 0 0 4.038 0 9c0 4.274 2.998 7.856 7 8.769V13h1v-2zm5-7.736A7.018 7.018 0 0 1 14.736 5H13V3.264zm-6-.969C7.634 2.106 8.305 2 9 2s1.366.106 2 .295V5H7V2.295zM5 14.736A7.001 7.001 0 0 1 3.264 13H5v1.736zM5 11H2.295a6.956 6.956 0 0 1 0-4H5v4zm0-6H3.264A7.018 7.018 0 0 1 5 3.264V5z" />
    </g>
  </svg>
);

export default SvgComponent;
