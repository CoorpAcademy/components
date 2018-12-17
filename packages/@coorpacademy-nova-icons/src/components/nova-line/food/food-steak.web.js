import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <g fill="currentColor">
      <path d="M16 2h-6c-5.084 0-8 2.916-8 8v6c0 5.221 3.133 6 5 6 3.821 0 5.325-4.169 5.801-6H16c6 0 6-6.021 6-8 0-3.309-2.691-6-6-6zm0 12h-4a1 1 0 0 0-.986.835C11.005 14.887 10.066 20 7 20c-1.288 0-3-.414-3-4v-6c0-3.981 2.019-6 6-6h6c2.205 0 4 1.794 4 4 0 5.273-1.922 6-4 6z" />
      <circle cx={7} cy={17} r={2} />
      <path d="M16 5h-6C7.516 5 5 6.374 5 9c0 3.318 1.01 5 3 5 1.912 0 3.678-1.367 4.393-2H16c3 0 3-3.011 3-4 0-1.654-1.346-3-3-3zm0 5h-4a1 1 0 0 0-.705.292C10.815 10.767 9.29 12 8 12c-.673 0-1-.981-1-3 0-1.582 1.963-2 3-2h6c.551 0 1 .449 1 1 0 1.803-.32 2-1 2z" />
    </g>
  </svg>
);

export default SvgComponent;
