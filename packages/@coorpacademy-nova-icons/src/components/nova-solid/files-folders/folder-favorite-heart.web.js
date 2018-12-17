import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-8.064 11S8 15.634 8 13.127c0-2.381 3.181-3.413 4.064-.288.882-3.125 3.936-2.093 3.936.288 0 2.703-3.726 4.676-4.064 4.873z"
    />
  </svg>
);

export default SvgComponent;
