import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.111 14.786l-1.113.445-1.113-.445c-1.15-.46-6.887-2.997-6.887-7.786v-.954c-5.046.452-9 4.296-9 8.954 0 1.735.541 3.392 1.573 4.836L-.002 24h11c5.514 0 10-4.037 10-9 0-.369-.032-.731-.08-1.089-.808.452-1.487.747-1.807.875z" />
      <path d="M11.998 0v7c0 3.812 3.797 5.579 5.804 5.981l.196.039.196-.039c2.007-.401 5.804-2.168 5.804-5.981V0h-12zm9 7h-2v2h-2V7h-2V5h2V3h2v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
