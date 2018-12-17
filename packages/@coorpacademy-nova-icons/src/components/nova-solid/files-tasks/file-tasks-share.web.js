import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M16 4h-2a2 2 0 0 0-4 0H8v3h8V4z" />
      <path d="M19 5h-1v3H6V5H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm-8 10c0 .053-.012.102-.016.154l2.701 1.35c.352-.31.809-.504 1.315-.504a2 2 0 1 1-2 2c0-.053.012-.102.016-.153l-2.701-1.351A1.978 1.978 0 0 1 9 17a2 2 0 0 1 0-4c.506 0 .963.194 1.315.504l2.701-1.35C13.012 12.102 13 12.053 13 12a2 2 0 1 1 2 2c-.506 0-.963-.193-1.315-.504l-2.701 1.351c.004.051.016.1.016.153z" />
    </g>
  </svg>
);

export default SvgComponent;
