import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M3 8H1v5h5v-2H3zM13.515 9a4.505 4.505 0 0 0-4.5 4.5V21h9v-7.5c0-2.481-2.019-4.5-4.5-4.5zm2.5 10h-5v-5.5c0-1.378 1.122-2.5 2.5-2.5s2.5 1.122 2.5 2.5V19z" />
      <path d="M13.515 12c-.827 0-1.5.673-1.5 1.5V15h3v-1.5c0-.827-.673-1.5-1.5-1.5zM13.515 4c-2.762 0-5.39.948-7.5 2.643V5h-2v5h5V8H7.524a9.97 9.97 0 0 1 5.991-2 9.977 9.977 0 0 1 7.714 3.637l1.542-1.273A11.969 11.969 0 0 0 13.515 4z" />
    </g>
  </svg>
);

export default SvgComponent;
