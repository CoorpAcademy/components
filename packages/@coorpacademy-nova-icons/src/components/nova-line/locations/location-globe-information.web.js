import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M.002.002h24v24.001h-24z" />
    <g fill="currentColor">
      <path d="M6.279 10l1.472 4.416 1.897-.632L7.721 8H6V3.083A7.933 7.933 0 0 1 9 2.07V8h3v1h2V6h-3V2.068a7.949 7.949 0 0 1 6.794 6.122l1.948-.451A9.95 9.95 0 0 0 10 0C4.486 0 0 4.486 0 10c0 4.645 3.286 8.749 7.813 9.761l.436-1.953C4.628 17 2 13.716 2 10c0-2.021.759-3.864 2-5.274V10h2.279z" />
      <path d="M17 10c-3.86 0-7 3.14-7 7s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm0 12c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z" />
      <path d="M16 17h2v4h-2z" />
      <circle cx={17} cy={15} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
