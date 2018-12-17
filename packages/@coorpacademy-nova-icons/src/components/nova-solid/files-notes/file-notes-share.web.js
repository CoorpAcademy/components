import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M18 2v3h-2V2h-3v3h-2V2H8v3H6V2H3v20h18V2h-3zm-7 12c0 .053-.012.102-.016.153l2.701 1.351c.352-.31.809-.504 1.315-.504a2 2 0 1 1-2 2c0-.053.012-.102.016-.153l-2.701-1.351C9.963 15.806 9.506 16 9 16a2 2 0 0 1 0-4c.506 0 .963.194 1.315.504l2.701-1.351c-.004-.051-.016-.1-.016-.153a2 2 0 1 1 2 2c-.506 0-.963-.194-1.315-.504l-2.701 1.351c.004.051.016.1.016.153z"
    />
  </svg>
);

export default SvgComponent;
