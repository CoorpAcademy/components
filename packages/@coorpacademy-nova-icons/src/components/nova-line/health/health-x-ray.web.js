import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .001h24v24.001H0z" />
    <path
      d="M19 7h-3.557A3.953 3.953 0 0 0 16 5c0-2.206-1.795-4-4-4S8 2.794 8 5c0 .731.212 1.409.557 2H5a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h3.18l1 5h5.641l1-5H19a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1zm-9-2c0-1.102.896-2 2-2s2 .898 2 2c0 1.103-.896 2-2 2s-2-.897-2-2zM6 16V9h5v1H8v2h3v1H9v2h2v1H6zm7.18 5h-2.36l-.601-3h3.561l-.6 3zM18 16h-5v-1h2v-2h-2v-1h3v-2h-3V9h5v7z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
