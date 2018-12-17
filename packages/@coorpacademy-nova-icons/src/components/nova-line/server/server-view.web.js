import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <path
      fill="currentColor"
      d="M3 3.001h5v2H3zM3 9.001h5v2H3zM3 15.001h5v2H3z"
    />
    <circle cx={13} cy={4.001} r={1} fill="currentColor" />
    <circle cx={16} cy={4.001} r={1} fill="currentColor" />
    <path
      d="M9 18.001H2v-4h7v-2H2v-4h15.999v1H20v-7a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h7v-2zm-7-16h16l-.001 4H2v-4z"
      fill="currentColor"
    />
    <path
      d="M23.414 22.001l-3.247-3.247c.524-.79.833-1.735.833-2.753 0-2.757-2.243-5-5-5s-5 2.243-5 5 2.243 5 5 5a4.964 4.964 0 0 0 2.753-.833L22 23.415l1.414-1.414zm-10.414-6c0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3-3-1.346-3-3z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
