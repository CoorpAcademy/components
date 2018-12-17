import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M15.97 13.243l1-4A1 1 0 0 0 16 8h-4V6h1c.265 0 .52-.105.707-.293l1-1A.998.998 0 0 0 14 3H8a1.002 1.002 0 0 0-.707 1.707l1 1A.997.997 0 0 0 9 6h1v2H6a.998.998 0 0 0-.97 1.243l1 4A1 1 0 0 0 7 14h.753l-1.729 7.783A.999.999 0 0 0 7 23h8a1.002 1.002 0 0 0 .976-1.217L14.247 14H15a1 1 0 0 0 .97-.757zM10 10v2H7.781l-.5-2H10zm3.753 11H8.247l1.556-7h2.396l1.554 7zm.466-9H12v-2h2.719l-.5 2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
