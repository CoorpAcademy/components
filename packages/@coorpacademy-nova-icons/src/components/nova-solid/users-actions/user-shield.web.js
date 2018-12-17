import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M8 16.006c2.205 0 4-1.795 4-4s-1.795-4-4-4c-2.206 0-4 1.795-4 4a4.005 4.005 0 0 0 4 4zM8 17.006c-4.711 0-8 2.467-8 6v1h16v-1c0-3.533-3.29-6-8-6zM12 .006v7c0 3.813 3.796 5.579 5.803 5.98l.197.039.195-.039C20.204 12.585 24 10.818 24 7.006v-7H12zm9 7h-2v2h-2v-2h-2v-2h2v-2h2v2h2v2z" />
    </g>
  </svg>
);

export default SvgComponent;
