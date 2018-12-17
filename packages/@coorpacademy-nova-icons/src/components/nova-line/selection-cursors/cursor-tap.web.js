import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <path
      d="M17 22h-7c-.379 0-.725-.214-.895-.553l-3-6A1 1 0 0 1 7 14h2V8a1 1 0 0 1 1.316-.949l3 1c.409.137.684.519.684.949v4.219l3.242.811A1 1 0 0 1 18 15v6a1 1 0 0 1-1 1zm-6.382-2H16v-4.219l-3.242-.81A1.002 1.002 0 0 1 12 14V9.721l-1-.333V15a1 1 0 0 1-1 1H8.618l2 4z"
      fill="currentColor"
    />
    <g fill="currentColor">
      <path d="M4 8h3v2H4zM6.757 3.344L8.88 5.465 7.465 6.88 5.343 4.758zM10 2h2v3h-2zM16.656 4.758L14.535 6.88 13.12 5.465l2.121-2.12zM15 8h3v2h-3z" />
    </g>
  </svg>
);

export default SvgComponent;
