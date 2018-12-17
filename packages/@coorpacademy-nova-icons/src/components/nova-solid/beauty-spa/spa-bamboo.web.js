import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M7.004 2h5v4h-5zM7.004 17h5v5h-5zM15.936 13.227c-.378.038-.74.103-1.089.179a12.338 12.338 0 0 0 1.976-1.588c2.343-2.344 3.182-5.304 3.182-5.304s-2.96.839-5.304 3.182c-1.369 1.37-2.222 2.946-2.696 4.022V8h-5v7h4.214c.457.181 2.555.942 4.966.699C18.912 15.424 21 13.966 21 13.966s-2.336-1.013-5.064-.739z" />
    </g>
  </svg>
);

export default SvgComponent;
