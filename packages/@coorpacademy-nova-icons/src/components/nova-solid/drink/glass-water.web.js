import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M19.745 2.332A1 1 0 0 0 19 2H5a1 1 0 0 0-.994 1.11l2 18A1 1 0 0 0 7 22h10a1 1 0 0 0 .994-.889l2-18a1.003 1.003 0 0 0-.249-.779zM17.883 4l-.444 4H6.562l-.445-4h11.766z"
    />
  </svg>
);

export default SvgComponent;
