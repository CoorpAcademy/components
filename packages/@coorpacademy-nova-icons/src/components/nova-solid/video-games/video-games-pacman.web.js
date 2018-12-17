import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="currentColor"
      d="M14.412 11.998l5.642-5.641a.999.999 0 0 0 .001-1.413c-1.897-1.899-4.402-2.946-7.057-2.946-5.514 0-10 4.487-10 10 0 5.514 4.486 10 10 10 2.654 0 5.16-1.045 7.057-2.945a.999.999 0 0 0-.001-1.413l-5.642-5.642zm-2.914-3.002a1.5 1.5 0 1 1 .001-3.001 1.5 1.5 0 0 1-.001 3.001z"
    />
  </svg>
);

export default SvgComponent;
