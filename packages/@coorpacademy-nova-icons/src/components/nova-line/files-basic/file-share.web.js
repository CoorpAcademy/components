import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M15 15c-.506 0-.963.194-1.315.504l-2.701-1.35c.004-.052.016-.101.016-.154s-.012-.102-.016-.153l2.701-1.351c.352.31.809.504 1.315.504a2 2 0 1 0-2-2c0 .053.012.102.016.154l-2.701 1.35A1.983 1.983 0 0 0 9 12a2 2 0 0 0 0 4c.506 0 .963-.194 1.315-.504l2.701 1.351c-.004.051-.016.1-.016.153a2 2 0 1 0 2-2z" />
      <path d="M16.414 1H5c-1.103 0-2 .898-2 2v18c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5.586L16.414 1zM5 21V3h10v4h4l.001 14H5z" />
    </g>
  </svg>
);

export default SvgComponent;
