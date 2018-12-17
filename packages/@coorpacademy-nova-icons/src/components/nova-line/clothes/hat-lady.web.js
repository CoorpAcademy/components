import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24.001v24H.001z" />
    <path
      d="M21.555 16.168L19 14.465V10c0-3.859-3.141-7-7-7s-7 3.141-7 7v4.465l-2.555 1.703a.997.997 0 0 0-.152 1.538C2.428 17.842 5.658 21 12 21s9.572-3.158 9.707-3.293a.998.998 0 0 0-.152-1.539zM17 14H7v-1h10v1zm-5-9c2.757 0 5 2.243 5 5v1H7v-1c0-2.757 2.243-5 5-5zm0 14c-3.574 0-6.01-1.147-7.274-1.948L6.303 16h11.395l1.577 1.051C18.009 17.853 15.574 19 12 19z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
