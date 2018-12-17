import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <path
      fill="currentColor"
      d="M15 1.001c-2.51 0-4.74 1.31-5.979 3.357.966.457 1.996 1.263 2.971 2.647l-.817.576C9.678 5.455 8.393 5.001 7 5.001c-2.757 0-5 2.243-5 5s2.243 5 5 5h8c3.859 0 7-3.14 7-7 0-3.859-3.141-7-7-7zM14 17.001H4a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h10v-6zM22.414 18.001L21 16.587l-2 2-2-2-1.414 1.414 2 2-2 2L17 23.415l2-2 2 2 1.414-1.414-2-2z"
    />
  </svg>
);

export default SvgComponent;
