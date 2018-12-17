import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path
      fill="currentColor"
      d="M2 11h20v2H2zM6 20h12v2H6zM18.415 10C19.894 7.873 22 4.718 22 4c0-1.103-.896-2-2-2-1.211 0-6.792 5.663-9.044 8h7.459zM3.227 14a9.021 9.021 0 0 0 3.128 5h11.289a9.016 9.016 0 0 0 3.128-5H3.227z"
    />
  </svg>
);

export default SvgComponent;
