import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M2 8h16v1.994h2V7c0-.007-.003-.012-.004-.018a.985.985 0 0 0-.068-.339c-.011-.028-.025-.053-.038-.08-.02-.038-.032-.08-.058-.117l-4-6A.998.998 0 0 0 15 0H5c-.334 0-.646.167-.832.445l-4 6c-.024.037-.038.079-.057.118-.013.027-.028.052-.039.08a.985.985 0 0 0-.068.339C.004 6.988 0 6.993 0 7v12a1 1 0 0 0 1 1h13v-2H2V8zm15.132-2H11V2h3.465l2.667 4zM5.535 2H9v4H2.869l2.666-4z" />
      <path d="M20 11.994c-2.205 0-4 1.795-4 4h2c0-1.103.897-2 2-2 1.104 0 2 .897 2 2s-.896 2-2 2h-1v3h2v-1.126a4.006 4.006 0 0 0 3-3.874c0-2.204-1.794-4-4-4z" />
      <circle cx={20} cy={23} r={1} />
    </g>
  </svg>
);

export default SvgComponent;
