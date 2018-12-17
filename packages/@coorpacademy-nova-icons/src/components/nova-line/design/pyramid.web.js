import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 2.15L1.528 18.44 12 23.095l10.472-4.654L12 2.15zm1 5.255l6.528 10.154L13 20.462V7.405zm-2 0v13.057L4.472 17.56 11 7.405z"
      fill="#767676"
    />
  </svg>
);

export default SvgComponent;
