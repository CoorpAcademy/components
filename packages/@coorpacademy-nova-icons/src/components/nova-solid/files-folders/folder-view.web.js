import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <circle cx={11.5} cy={13.5} r={2.5} />
      <path d="M20 7h-8l-1.447-1.894A2 2 0 0 0 8.764 4H3a1 1 0 0 0-1 1v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2zm-3.227 11.772a1.74 1.74 0 0 1-1.238.513c-.467 0-.906-.182-1.237-.511l-1.108-1.109A4.468 4.468 0 0 1 11.5 18 4.505 4.505 0 0 1 7 13.5C7 11.019 9.019 9 11.5 9s4.5 2.019 4.5 4.5c0 .598-.123 1.167-.335 1.69l1.108 1.108a1.752 1.752 0 0 1 0 2.474z" />
    </g>
  </svg>
);

export default SvgComponent;
