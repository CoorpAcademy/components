import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 15.766v.236c0 1.496 1.607 2.5 4 2.5s4-1.004 4-2.5v-.236l-4-8-4 8zm4 .736c-1.041 0-1.696-.264-1.92-.423L12 12.238l1.916 3.832c-.234.174-.886.432-1.916.432z" />
      <path d="M16.414 1.002H5c-1.103 0-2 .896-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.587l-4.586-4.585zM5 21.002v-18h10v4h4l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
