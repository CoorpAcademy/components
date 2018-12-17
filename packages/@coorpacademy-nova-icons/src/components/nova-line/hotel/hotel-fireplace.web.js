import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M1 20h22v2H1zM1 4h22v2H1zM12.327 8.055a.997.997 0 0 0-1.113.328C10.884 8.803 8 12.549 8 15c0 1.988 1.374 4 4 4s4-2.012 4-4c0-1.486-1.19-2.615-1.326-2.739a1 1 0 0 0-1.121-.155l-.553.276V9a1 1 0 0 0-.673-.945zm1.409 6.195c.143.229.264.498.264.75 0 .923-.524 2-2 2s-2-1.077-2-2c0-.668.433-1.679 1-2.693V14a1 1 0 0 0 1.447.895l1.289-.645zM18 8h4v2h-4zM18 12h4v2h-4zM18 16h4v2h-4zM2 8h4v2H2zM2 12h4v2H2zM2 16h4v2H2z" />
    </g>
  </svg>
);

export default SvgComponent;
