import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 3a8 8 0 0 0-8 8c0 8 8 11 8 11s8-3 8-11a8 8 0 0 0-8-8zm-1.061 11.912C5.535 14.912 6.026 10 6.026 10c5.894 0 4.913 4.912 4.913 4.912zm2.122 0S12.079 10 17.973 10c.001 0 .492 4.912-4.912 4.912z"
    />
  </svg>
);

export default SvgComponent;
