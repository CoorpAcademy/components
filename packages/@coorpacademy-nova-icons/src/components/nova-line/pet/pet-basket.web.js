import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M21 14H3a1.003 1.003 0 0 0-.949 1.317l2 6A1 1 0 0 0 5 22h14a1 1 0 0 0 .949-.684l2-6A1 1 0 0 0 21 14zm-8 2h2v4h-2v-4zm-2 4H9v-4h2v4zm-6.613-4H7v4H5.721l-1.334-4zm13.892 4H17v-4h2.613l-1.334 4zM3 13h18a1 1 0 0 0 .949-1.316l-2-6A1 1 0 0 0 19 5h-3c0-2.205-1.794-4-4-4S8 2.795 8 5H5a1 1 0 0 0-.949.684l-2 6a.996.996 0 0 0 .138.9c.188.262.49.416.811.416zm8-6v4H9V7h2zm4 0v4h-2V7h2zm4.613 4H17V7h1.279l1.334 4zM12 3c1.103 0 2 .896 2 2h-4c0-1.104.897-2 2-2zM5.721 7H7v4H4.387l1.334-4z" />
    </g>
  </svg>
);

export default SvgComponent;
