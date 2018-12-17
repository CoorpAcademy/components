import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <path
      fill="currentColor"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.478 10-10S17.522 2 12 2zM6.403 17.803l1.415-4.243 2.828 2.829-4.243 1.414zm10.608-7.777l-4.95 4.948-2.828-2.828 4.949-4.95a2 2 0 0 1 2.829 2.83z"
    />
  </svg>
);

export default SvgComponent;
