import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.001.002h24v24h-24z" />
    <path
      d="M20 15.051V12a1 1 0 0 0-1-1h-3V7a2 2 0 0 0-2-2h-3c-.446 0-.854.151-1.187.399L6.707 2.293a.999.999 0 0 0-1.414 0c-4.38 4.38-4.121 3.879-4.121 3.879C.211 7.132-.2 8.494.093 9.879a3.983 3.983 0 0 0 3.022 3.026c1.407.301 2.791-.127 3.754-1.118.369-.38.333-.999-.041-1.373L3.414 7 6 4.414l3 3v7.637a3.493 3.493 0 0 0-2.91 4.25C6.451 20.918 7.993 22 9.65 22h9.699c1.657 0 3.2-1.082 3.561-2.699a3.493 3.493 0 0 0-2.91-4.25zM2.067 8.482l2.451 2.451c-1.487.396-2.846-.967-2.451-2.451zM18 13v2h-7v-2h7zm-1.649 4A3.468 3.468 0 0 0 16 18.5c0 .54.133 1.043.351 1.5h-3.702c.218-.457.351-.96.351-1.5 0-.539-.133-1.043-.351-1.5h3.702zM14 7v4h-3V7h3zM8 18.5c0-.827.673-1.5 1.5-1.5s1.5.673 1.5 1.5-.673 1.5-1.5 1.5S8 19.327 8 18.5zM19.5 20c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
