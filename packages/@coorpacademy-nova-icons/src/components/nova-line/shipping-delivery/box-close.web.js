import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M2 18V8h16v6h2V7c0-.006-.004-.012-.004-.018a.99.99 0 0 0-.068-.339c-.011-.028-.025-.053-.039-.08-.019-.04-.031-.081-.057-.118l-4-6A1.004 1.004 0 0 0 15 0H5c-.334 0-.646.168-.832.446l-4 6c-.025.037-.038.078-.057.118-.014.027-.028.051-.039.08a.984.984 0 0 0-.068.338C.004 6.988 0 6.994 0 7v12a1 1 0 0 0 1 1h14v-2H2zM17.131 6H11V2h3.465l2.666 4zM5.535 2H9v4H2.869l2.666-4z" />
      <path d="M23.707 17.708l-1.414-1.414L20 18.586l-2.293-2.292-1.414 1.414L18.586 20l-2.293 2.294 1.414 1.414L20 21.415l2.293 2.293 1.414-1.414L21.414 20z" />
    </g>
  </svg>
);

export default SvgComponent;
