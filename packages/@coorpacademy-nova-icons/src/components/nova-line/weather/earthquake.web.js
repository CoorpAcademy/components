import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 11h-1V8h2a1 1 0 0 0 .625-1.78l-5-4a1 1 0 0 0-1.249 0l-5 4A1 1 0 0 0 11 8h2v3a.999.999 0 0 0-.874.515L9 17.142V15a1 1 0 0 0-1-1H7v-2a1 1 0 0 0-1-1H4c-1.103 0-2 .898-2 2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7c0-1.102-.897-2-2-2zM7 20H4v-7h1v2a1 1 0 0 0 1 1h1v4zm9-15.719L18.149 6H13.85L16 4.281zM15 8h2v3h-2V8zM9.7 20l3.889-7H20l.001 7H9.7z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
