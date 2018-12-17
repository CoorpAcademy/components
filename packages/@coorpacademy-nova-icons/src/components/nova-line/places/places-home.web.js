import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.001h24v24.001h-24z" />
    <path
      d="M21.707 12.292L19 9.585V4.999c0-.551-.448-1-1-1h-3a.993.993 0 0 0-.93.656l-1.363-1.362a1 1 0 0 0-1.414 0l-9 9A1 1 0 0 0 3 13.999h2v6c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-3h2v3c0 1.103.897 2 2 2h2c1.103 0 2-.897 2-2v-6h2a1 1 0 0 0 .707-1.707zM16 5.999h1v1.586l-1-1v-.586zm2 6c-.552 0-1 .449-1 1l.001 7H15v-4c0-.551-.448-1-1-1h-4c-.552 0-1 .449-1 1v4H7v-7c0-.551-.448-1-1-1h-.586L12 5.413l6.586 6.585H18z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
