import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24h-24z" />
    <path
      d="M19.553 9.895l.895-1.789L13 4.382V2h-2v2.382L3.553 8.106l.895 1.789 3.105-1.553L8.882 11l-2.776 5.553A1.001 1.001 0 0 0 7 18h4v2H6v2h12v-2h-5v-2h4a1.003 1.003 0 0 0 .895-1.448L15.118 11l1.329-2.658 3.106 1.553zM15.382 16H8.618l2.276-4.553a1 1 0 0 0 0-.895L9.342 7.447 12 6.119l2.658 1.328-1.553 3.105a1 1 0 0 0 0 .895L15.382 16z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
