import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24H0z" />
    <circle fill="currentColor" cx={11.998} cy={12} r={2} />
    <path
      fill="currentColor"
      d="M4.927 19.07c-3.899-3.898-3.899-10.243 0-14.142l1.414 1.414c-3.119 3.12-3.119 8.195 0 11.314L4.927 19.07zM19.068 19.07l-1.414-1.414A7.946 7.946 0 0 0 19.998 12a7.945 7.945 0 0 0-2.344-5.658l1.414-1.414c1.889 1.889 2.93 4.4 2.93 7.072s-1.041 5.182-2.93 7.07z"
    />
    <path
      fill="currentColor"
      d="M7.756 16.242A5.962 5.962 0 0 1 5.998 12c0-1.604.625-3.109 1.758-4.242L9.17 9.172A3.97 3.97 0 0 0 7.998 12c0 1.068.416 2.072 1.172 2.827l-1.414 1.415zM16.24 16.242l-1.414-1.415A3.969 3.969 0 0 0 15.998 12a3.97 3.97 0 0 0-1.172-2.828l1.414-1.414A5.96 5.96 0 0 1 17.998 12a5.962 5.962 0 0 1-1.758 4.242z"
    />
  </svg>
);

export default SvgComponent;
