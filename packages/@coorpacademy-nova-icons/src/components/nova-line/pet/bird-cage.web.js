import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <path
      d="M14.654 4.369C14.868 3.957 15 3.496 15 3c0-1.654-1.346-3-3-3S9 1.346 9 3c0 .496.132.957.346 1.369C5.118 5.536 2 9.407 2 14v9h20v-9c0-4.593-3.118-8.464-7.346-9.631zM11 3c0-.551.449-1 1-1s1 .449 1 1-.449 1-1 1-1-.449-1-1zm9 18h-3v-2h-2v2h-2v-4h3v-2H8v2h3v4H9v-2H7v2H4v-7a7.984 7.984 0 0 1 3-6.235V13h2V6.589C9.928 6.213 10.939 6 12 6s2.072.213 3 .589V13h2V7.765A7.984 7.984 0 0 1 20 14v7z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
