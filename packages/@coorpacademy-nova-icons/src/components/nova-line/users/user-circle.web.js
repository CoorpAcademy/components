import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M12.001 24c-2.346 0-10-.217-10-3 0-1.313 1.531-2.153 4.819-2.647l.297 1.978c-1.405.212-2.255.472-2.726.673 1.049.439 3.669.996 7.61.996s6.561-.558 7.61-.997c-.474-.203-1.333-.466-2.757-.677l.294-1.979c3.311.492 4.853 1.335 4.853 2.652 0 2.784-7.654 3.001-10 3.001zM12.001 7c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3zm0-4c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1z"
      fill="currentColor"
    />
    <path
      d="M14.001 21h-4a1 1 0 0 1-1-1v-4h-1a1 1 0 0 1-1-1v-3c0-2.757 2.243-5 5-5s5 2.243 5 5v3a1 1 0 0 1-1 1h-1v4a1 1 0 0 1-1 1zm-3-2h2v-4a1 1 0 0 1 1-1h1v-2c0-1.654-1.346-3-3-3s-3 1.346-3 3v2h1a1 1 0 0 1 1 1v4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
