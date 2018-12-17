import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .002h24v24H0z" />
    <g fill="currentColor">
      <path d="M9 13h2v2H9zM5.414 7h13.172l3.699-3.699A2.948 2.948 0 0 0 21 3H3c-.462 0-.895.113-1.285.301L5.414 7zM20 8.414V20l2.4 1.8a1.01 1.01 0 0 0 1.047.095A1 1 0 0 0 24 21V6c0-.46-.113-.894-.301-1.285L20 8.414zM13 13h2v2h-2z" />
      <path d="M18 9H6v10h12V9zm-3 6v2h-2v-2h-2v2H9v-2H7v-2h2v-2h2v2h2v-2h2v2h2v2h-2zM4 20V8.414L.301 4.715A2.958 2.958 0 0 0 0 6v15a1 1 0 0 0 1.6.8L4 20z" />
    </g>
  </svg>
);

export default SvgComponent;
