import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <path d="M19.971 3.243l-1.942-.486L16.469 9h2.062zM15.995 3.1l-1.99-.2-.611 6.1h2.011zM11 2h2v9h-2zM10.606 9l-.611-6.1-1.99.2.59 5.9zM7.82 9l-.839-4.196-1.962.392L5.78 9z" />
      <path d="M18 10h-3a.998.998 0 0 0-.894.553L13.382 12h-2.764l-.724-1.447A.998.998 0 0 0 9 10H6a1 1 0 0 0-.995 1.1l1 10A1 1 0 0 0 7 22h10a1 1 0 0 0 .995-.9l1-10A.997.997 0 0 0 18 10zm-2 8H8v-3h8v3z" />
    </g>
  </svg>
);

export default SvgComponent;
