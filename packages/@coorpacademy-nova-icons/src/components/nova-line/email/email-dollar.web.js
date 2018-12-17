import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24v24H0z" />
    <path
      d="M11.6 7.4H15V5.8h-2.2V5h-1.6v.841c-.912.185-1.6.993-1.6 1.959 0 1.104.897 2 2 2h.8a.4.4 0 0 1 0 .799H9V12.2h2.2v.8h1.6v-.84a2.004 2.004 0 0 0 1.601-1.96c0-1.104-.897-2-2-2H11.6a.4.4 0 0 1 0-.8z"
      fill="currentColor"
    />
    <path
      d="M20 22H4c-1.104 0-2-.897-2-2v-9a1 1 0 0 1 1.64-.767L9.361 15h5.277l5.721-4.768A1.002 1.002 0 0 1 22 11v9c0 1.103-.896 2-2 2zM4 13.135V20h16.002L20 13.135l-4.359 3.633c-.18.15-.407.232-.641.232H9c-.234 0-.461-.082-.641-.232L4 13.135zM20 9h-2V4H6v5H4V2h16z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
