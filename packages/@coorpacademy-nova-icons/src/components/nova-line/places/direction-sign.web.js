import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24.001H0z" />
    <path
      d="M17 9.999a1 1 0 0 0 .707-.292l2-2a.999.999 0 0 0 0-1.414l-2-2A.996.996 0 0 0 17 3.999h-5v-2h-2v2H4c-.552 0-1 .449-1 1v4a1 1 0 0 0 1 1h6v2H5c-.265 0-.52.106-.707.293l-2 2a.999.999 0 0 0 0 1.414l2 2a.996.996 0 0 0 .707.293h5v4h2v-4h6a1 1 0 0 0 1-1v-4c0-.551-.448-1-1-1h-6v-2h5zm0 4v2H5.414l-1-1 1-1H17zm-12-8h11.586l1 1-1 1H5v-2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
