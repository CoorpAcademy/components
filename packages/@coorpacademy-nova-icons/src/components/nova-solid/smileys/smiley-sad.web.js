import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zm2 5h4v2h-4V7zM6 7h4v2H6V7zm10.441 10.998A5.412 5.412 0 0 0 12 15.652a5.41 5.41 0 0 0-4.443 2.349L6 16.442a7.584 7.584 0 0 1 6-2.961 7.596 7.596 0 0 1 6 2.958l-1.559 1.559zM18 14a1.5 1.5 0 0 1-1.5-1.5c0-.828 1.5-2.5 1.5-2.5s1.5 1.672 1.5 2.5A1.5 1.5 0 0 1 18 14z"
    />
  </svg>
);

export default SvgComponent;
