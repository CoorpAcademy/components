import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M18.906 14c.055.328.092.66.092 1 0 3.86-3.589 7-8 7H3.291l1.328-1.43c.348-.375.356-.952.021-1.338C3.566 18 2.998 16.537 2.998 15c0-3.859 3.589-7 8-7V6c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.572 4.836L.266 22.32A.998.998 0 1 0 .998 24h10c5.514 0 10-4.037 10-9 0-.338-.025-.671-.065-1h-2.027z" />
      <path d="M17.998 0l1.714 4.286h4.286l-3.708 3.13L22.283 12l-4.285-2.834L13.712 12l1.994-4.584-3.708-3.13h4.285z" />
    </g>
  </svg>
);

export default SvgComponent;
