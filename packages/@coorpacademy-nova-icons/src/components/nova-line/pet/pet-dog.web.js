import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      d="M23 7h-2c0 3-1.505 3-2 3h-4.272l5.864-7.539-1.184-.921-6.199 7.97-4.333-6.498L6.382 8H5.5C4.122 8 3 9.121 3 10.5S4.122 13 5.5 13H7c.551 0 1 .449 1 1v7h2v-4h9v4h2v-9.534c1.271-.757 2-2.3 2-4.466zm-4 8h-9v-1c0-1.654-1.346-3-3-3H5.5a.5.5 0 0 1 0-1h2.118l1.506-3.012L12.465 12H19v3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
