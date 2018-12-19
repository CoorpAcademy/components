import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM11.5 19A4.5 4.5 0 0 1 7 14.5c0-1.956 1.256-3.604 3-4.225V16h5.725c-.621 1.744-2.268 3-4.225 3zm.5-5V9a5 5 0 0 1 5 5h-5zm3-7V2l5 5h-5z"
    />
  </svg>
);

export default SvgComponent;
