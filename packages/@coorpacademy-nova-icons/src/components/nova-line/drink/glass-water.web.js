import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M19.745 2.333A.997.997 0 0 0 19 2H5a.997.997 0 0 0-.994 1.111l2 18A1 1 0 0 0 7 22h10a1 1 0 0 0 .994-.889l2-18a.996.996 0 0 0-.249-.778zM17.883 4l-.444 4H6.562l-.445-4h11.766zm-1.778 16h-8.21L6.783 10h10.433l-1.111 10z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
