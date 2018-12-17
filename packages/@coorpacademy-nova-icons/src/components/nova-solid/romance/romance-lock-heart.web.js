import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24.001v24.002H.001z" />
    <path
      fill="currentColor"
      d="M15.999 2.998c-1.594 0-3.07.837-4 2.081-.93-1.243-2.406-2.081-4-2.081-2.757 0-5 2.244-5 5 0 5.392 8.001 12.455 8.342 12.752a.993.993 0 0 0 1.316 0c.341-.297 8.342-7.36 8.342-12.752 0-2.757-2.243-5-5-5zm-3 9.723v3.277h-2v-3.277a1.99 1.99 0 0 1-1-1.723 2 2 0 0 1 4 0c0 .738-.404 1.375-1 1.723z"
    />
  </svg>
);

export default SvgComponent;
