import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M2 8h16v4h2V7c0-.007-.004-.012-.004-.018a.985.985 0 0 0-.068-.339c-.011-.028-.025-.053-.039-.08-.019-.038-.031-.08-.057-.117l-4-6A1 1 0 0 0 15 0H5c-.334 0-.646.167-.832.445l-4 6c-.025.037-.038.079-.057.118-.013.027-.028.052-.039.08a.985.985 0 0 0-.068.339C.004 6.988 0 6.993 0 7v12a1 1 0 0 0 1 1h7v-2H2V8zm15.131-2H11V2h3.465l2.666 4zM5.535 2H9v4H2.869l2.666-4z" />
      <path d="M23.707 18.293l-2-2A1 1 0 0 0 21 16h-1v-1a1 1 0 0 0-1-1h-8a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h1.277c.347.595.984 1 1.723 1s1.376-.405 1.723-1h2.555c.347.595.984 1 1.723 1s1.376-.405 1.723-1H23a1 1 0 0 0 1-1v-3a.997.997 0 0 0-.293-.707zM12 16h6v5h-2.277c-.346-.596-.984-1-1.723-1s-1.377.404-1.723 1H12v-5zm10 5h-.277A1.99 1.99 0 0 0 20 20v-2h.586L22 19.414V21z" />
    </g>
  </svg>
);

export default SvgComponent;
