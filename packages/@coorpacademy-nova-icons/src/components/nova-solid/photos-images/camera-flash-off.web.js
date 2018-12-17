import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M22.293 21.745L1.257.708-.157 2.122l3.652 3.652A9.888 9.888 0 0 0 2 11c0 5.515 4.486 10 10 10a9.891 9.891 0 0 0 5.226-1.494l3.653 3.652 1.414-1.413zm-14.127-11.3L9.721 12H7l1.166-1.555zM11 18v-4.721l2.023 2.024L11 18zM13 4.001v5.622l.378.377H17l-1.552 2.069 4.703 4.704A9.932 9.932 0 0 0 22 11c0-5.515-4.486-10-10-10-2.151 0-4.14.689-5.773 1.85l4.363 4.363L13 4.001z" />
    </g>
  </svg>
);

export default SvgComponent;
