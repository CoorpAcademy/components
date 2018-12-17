import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12c0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM7.414 7l2.829 2.829-1.415 1.414L6 8.414 7.414 7zm9.027 10.998A5.412 5.412 0 0 0 12 15.652a5.41 5.41 0 0 0-4.443 2.349L6 16.442a7.584 7.584 0 0 1 6-2.961 7.596 7.596 0 0 1 6 2.958l-1.559 1.559zm-1.27-6.755l-1.414-1.414L16.586 7 18 8.414l-2.829 2.829z"
    />
  </svg>
);

export default SvgComponent;
