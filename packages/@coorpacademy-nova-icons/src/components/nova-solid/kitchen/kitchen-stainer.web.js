import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001 0H24v24H-.001z" />
    <g fill="currentColor">
      <path d="M15 2a7 7 0 1 0 0 14 7 7 0 0 0 0-14zm-.708 2.05a1 1 0 1 1 1.414 1.414 1 1 0 0 1-1.414-1.414zm-2.829 5.657a.999.999 0 1 1-1.414-1.411.999.999 0 0 1 1.414 1.411zm2.122 2.121a.999.999 0 1 1-1.414-1.414.999.999 0 1 1 1.414 1.414zm0-4.243a1 1 0 1 1-1.416-1.413 1 1 0 0 1 1.416 1.413zm2.121 6.364a.999.999 0 1 1-1.414-1.414.999.999 0 1 1 1.414 1.414zm.001-4.242a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414zm2.121 2.121a1 1 0 1 1-1.415-1.414 1 1 0 0 1 1.415 1.414zm0-4.242a.999.999 0 1 1-1.414-1.411.999.999 0 0 1 1.414 1.411zm2.121 2.121a.999.999 0 1 1-1.414-1.411.999.999 0 0 1 1.414 1.411zM3.708 21.707l-1.413-1.413 5.999-6 1.413 1.413z" />
    </g>
  </svg>
);

export default SvgComponent;
