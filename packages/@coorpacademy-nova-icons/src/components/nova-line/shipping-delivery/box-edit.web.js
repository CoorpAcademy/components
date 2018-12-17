import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M2 8h16v.994h2V7c0-.006-.004-.012-.004-.018a.99.99 0 0 0-.068-.339c-.011-.028-.025-.053-.039-.08-.019-.039-.031-.081-.057-.118l-4-6A1.004 1.004 0 0 0 15 0H5c-.334 0-.646.168-.832.446l-4 6c-.025.037-.038.078-.057.117-.014.027-.028.052-.039.08a.994.994 0 0 0-.068.339C.004 6.988 0 6.994 0 7v12a1 1 0 0 0 1 1h8v-2H2V8zm15.131-2H11V2h3.465l2.666 4zM5.535 2H9v4H2.869l2.666-4zM23.707 14.288l-3-3a.999.999 0 0 0-1.414 0l-7 7a1.005 1.005 0 0 0-.264.464l-1 4c-.084.341.016.701.264.95a.998.998 0 0 0 .949.263l4-1c.176-.044.337-.135.465-.263l7-7a.999.999 0 0 0 0-1.414zm-8.219 6.804l-2.113.528.527-2.114L17 16.409l1.586 1.585-3.098 3.098zM20 16.582l-1.586-1.587L20 13.409l1.586 1.585L20 16.582z" />
    </g>
  </svg>
);

export default SvgComponent;
