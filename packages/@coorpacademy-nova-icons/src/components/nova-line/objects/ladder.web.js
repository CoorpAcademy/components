import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      d="M20.057 1.67L19.24 4h-8.881l.584-1.67-1.886-.66-7 20 1.887.66L5.459 18h8.881l-1.283 3.67 1.887.66 7-20-1.887-.66zM18.541 6l-.701 2H8.959l.701-2h8.881zm-1.4 4l-.7 2H7.56l.7-2h8.881zM6.16 16l.699-2h8.881l-.699 2H6.16z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
