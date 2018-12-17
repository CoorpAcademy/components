import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M19 4.001a1 1 0 0 0-.996.91l-.917 10.09H2v2h16a1 1 0 0 0 .996-.91l.917-10.09H22v-2h-3z" />
      <circle cx={5} cy={20.001} r={2} />
      <circle cx={16} cy={20.001} r={2} />
      <path d="M4 14.001h10c1.104 0 2-.898 2-2v-5c0-1.103-.896-2-2-2h-2v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H4c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2zm8-7h2v5h-2v-5zm-4-3h2v1H8v-1zm0 3h2v5H8v-5zm-4 0h2v5H4v-5z" />
    </g>
  </svg>
);

export default SvgComponent;
