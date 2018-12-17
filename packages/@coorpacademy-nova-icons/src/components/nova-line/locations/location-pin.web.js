import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <g fill="currentColor">
      <circle cx={13} cy={10} r={2} />
      <path d="M13 4c-3.309 0-6 2.692-6 6 0 3 4.535 10.514 6 12.928 1.493-2.461 6-9.931 6-12.928 0-3.308-2.691-6-6-6zm0 15.03c-1.808-3.152-4-7.48-4-9.03 0-2.206 1.794-4 4-4s4 1.794 4 4c0 1.55-2.192 5.878-4 9.03zM12 1h2v2h-2zM18.657 2.929l1.415 1.414-1.416 1.416-1.414-1.414zM7.343 2.93L8.76 4.344 7.344 5.76 5.93 4.343z" />
    </g>
  </svg>
);

export default SvgComponent;
