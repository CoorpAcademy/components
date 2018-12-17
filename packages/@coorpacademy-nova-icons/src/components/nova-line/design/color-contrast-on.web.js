import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12 22c-3.86 0-7-3.14-7-7 0-3.446 5.094-11 7-13.76 1.916 2.774 7 10.317 7 13.76 0 3.86-3.14 7-7 7zm0-17.207C9.796 8.157 7 13.066 7 15c0 2.757 2.243 5 5 5s5-2.243 5-5c0-1.934-2.796-6.844-5-10.207z"
      fill="#767676"
    />
  </svg>
);

export default SvgComponent;
