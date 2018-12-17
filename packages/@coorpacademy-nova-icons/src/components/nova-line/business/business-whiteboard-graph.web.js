import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M20 2H4c-1.104 0-2 .898-2 2v10c0 1.103.896 2 2 2h5.585l-5.999 5.999h2.828L11 17.414v4.585h2v-4.585l4.586 4.585h2.828L14.415 16H20c1.104 0 2-.897 2-2V4c0-1.102-.896-2-2-2zm0 2v.586l-5 5-1.293-1.293a.999.999 0 0 0-1.414 0L11 9.586 8.707 7.293a.999.999 0 0 0-1.414 0L5.586 9H4V4h16zM4 14v-3h2c.266 0 .52-.105.707-.293L8 9.415l2.293 2.292a.999.999 0 0 0 1.414 0L13 10.415l1.293 1.292a.997.997 0 0 0 1.414 0l4.292-4.292L19.997 14H4z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
