import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001 0h24v24.002h-24z" />
    <g fill="currentColor">
      <path d="M12 12a2 2 0 0 0 2-2c0-.738-.405-1.377-1-1.723V7h4V5h-4V3h4V1h-4V0h-2v8.277c-.595.346-1 .985-1 1.723a2 2 0 0 0 2 2zM22 13h-2c0 1.104-.897 2-2 2s-2-.896-2-2h-2c0 1.104-.897 2-2 2s-2-.896-2-2H8c0 1.104-.897 2-2 2s-2-.896-2-2H2c0 1.104-.897 2-2 2v2c1.2 0 2.266-.544 3-1.383C3.734 16.456 4.8 17 6 17s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383v-2c-1.103 0-2-.896-2-2zM22 18h-2c0 1.104-.897 2-2 2s-2-.896-2-2h-2c0 1.104-.897 2-2 2s-2-.896-2-2H8c0 1.104-.897 2-2 2s-2-.896-2-2H2c0 1.104-.897 2-2 2v2c1.2 0 2.266-.544 3-1.383C3.734 21.456 4.8 22 6 22s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383s2.266-.544 3-1.383c.734.839 1.8 1.383 3 1.383v-2c-1.103 0-2-.896-2-2z" />
    </g>
  </svg>
);

export default SvgComponent;
