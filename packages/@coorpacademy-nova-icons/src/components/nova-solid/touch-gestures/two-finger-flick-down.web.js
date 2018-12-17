import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M13 9.005a3 3 0 0 0-3-3H2v12h8a3 3 0 0 0 0-6 3 3 0 0 0 3-3zm-2 6a1 1 0 0 1-1 1H9v-2h1a1 1 0 0 1 1 1zm-1-5H9v-2h1a1 1 0 1 1 0 2zM20.094 4.911L22 3.005h-4l2-2h-5v5l2-2v4l1.615-1.614c.635 1.985.803 4.106.479 6.184a13.397 13.397 0 0 1-3.8 7.48l1.412 1.416a15.386 15.386 0 0 0 4.364-8.59 15.492 15.492 0 0 0-.872-8.011l-.104.041z" />
    </g>
  </svg>
);

export default SvgComponent;
