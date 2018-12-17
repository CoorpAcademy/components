import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 22H4c-1.104 0-2-.897-2-2v-9a1 1 0 0 1 1.64-.768L9.361 15h5.277l5.721-4.769A1.002 1.002 0 0 1 22 11v9c0 1.103-.896 2-2 2zM4 13.135V20h16.002L20 13.135l-4.359 3.634c-.18.149-.407.231-.641.231H9c-.234 0-.461-.082-.641-.231L4 13.135zM20 9h-2V4H6v5H4V2h16z"
      fill="currentColor"
    />
    <path fill="currentColor" d="M9 5v7.796L16 9z" />
  </svg>
);

export default SvgComponent;
