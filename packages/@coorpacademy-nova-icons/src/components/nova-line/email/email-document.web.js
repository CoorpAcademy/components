import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M19.998 22h-16c-1.103 0-2-.897-2-2v-9a1 1 0 0 1 1.64-.768L9.36 15h5.276l5.722-4.769a1.001 1.001 0 0 1 1.639.768v9A2 2 0 0 1 19.998 22zm-16-8.865V20H20l-.001-6.865-4.36 3.634c-.18.149-.407.231-.641.231h-6c-.233 0-.46-.082-.64-.231l-4.36-3.634zM19.998 9h-2V4h-12v5h-2V2h16z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M7.998 6h8v2h-8zM7.998 9h6v2h-6z" />
  </svg>
);

export default SvgComponent;
