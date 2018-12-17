import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path fill="currentColor" d="M12 5L7 9h2v4h2v-2h2v2h2V9h2z" />
    <path
      d="M20 22H4c-1.104 0-2-.897-2-2v-9a1 1 0 0 1 1.64-.767L9.361 15h5.277l5.721-4.768A1.002 1.002 0 0 1 22 11v9c0 1.103-.896 2-2 2zM4 13.135V20h16.002L20 13.135l-4.359 3.633c-.18.15-.407.232-.641.232H9c-.234 0-.461-.082-.641-.232L4 13.135zM20 9h-2V4H6v5H4V2h16z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
