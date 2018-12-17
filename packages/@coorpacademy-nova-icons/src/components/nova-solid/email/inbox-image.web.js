import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path fill="currentColor" d="M20 13h-2V4H6v9H4V2h16z" />
    <path
      fill="currentColor"
      d="M13.273 6l-2.935 4.708-1.274-2.042L7 11.979h10zM15.858 15c-.446 1.723-1.997 3-3.858 3s-3.412-1.277-3.858-3H2v7h20v-7h-6.142z"
    />
  </svg>
);

export default SvgComponent;
