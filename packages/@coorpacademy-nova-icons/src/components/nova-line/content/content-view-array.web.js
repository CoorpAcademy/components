import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .003h24v24H0z" />
    <path
      d="M16.5 21.001h-9c-.827 0-1.5-.673-1.5-1.5v-15c0-.827.673-1.5 1.5-1.5h9c.827 0 1.5.673 1.5 1.5v15c0 .827-.673 1.5-1.5 1.5zm-8.5-2h8v-14H8v14zM5 19.001H4c-1.104 0-2-.897-2-2v-10c0-1.102.896-2 2-2h1v2H4v10h1v2zM20 19.001h-1v-2h1v-10h-1v-2h1c1.104 0 2 .898 2 2v10c0 1.103-.896 2-2 2z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
