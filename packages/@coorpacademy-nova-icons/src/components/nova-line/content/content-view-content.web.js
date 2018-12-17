import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <path
      d="M9 11H4c-1.104 0-2-.897-2-2V4c0-1.103.896-2 2-2h5c1.104 0 2 .897 2 2v5c0 1.103-.896 2-2 2zM4 4v5h4.997L9 4H4zM9 22H4c-1.104 0-2-.897-2-2v-5c0-1.103.896-2 2-2h5c1.104 0 2 .897 2 2v5c0 1.103-.896 2-2 2zm-5-7v5h4.997L9 15H4zM12 4h10v2H12zM12 7h10v2H12zM12 15h10v2H12zM12 18h10v2H12z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
