import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="#767676">
      <path d="M2 8h16v2.994h2V7c0-.007-.003-.012-.004-.018a.985.985 0 0 0-.068-.339c-.011-.028-.025-.053-.038-.08-.02-.038-.032-.08-.058-.117l-4-6A.998.998 0 0 0 15 0H5c-.334 0-.646.167-.832.445l-4 6c-.024.037-.038.079-.057.118-.013.027-.028.052-.039.08a.985.985 0 0 0-.068.339C.004 6.988 0 6.993 0 7v12a1 1 0 0 0 1 1h9v-2H2V8zm15.132-2H11V2h3.465l2.667 4zM5.535 2H9v4H2.869l2.666-4z" />
      <path d="M20 12.994c-.735 0-1.451.332-2 .846-.548-.515-1.265-.846-2-.846-2.393 0-4 1.607-4 4 0 3.466 4.924 6.521 5.485 6.857a1.004 1.004 0 0 0 1.03 0C19.076 23.515 24 20.46 24 16.994c0-2.392-1.607-4-4-4zm-2 8.811c-1.422-.965-4-3.073-4-4.811 0-.601.195-2 2-2 .449 0 1 .552 1 1a1 1 0 0 0 2 0c0-.448.552-1 1-1 1.806 0 2 1.399 2 2 0 1.738-2.578 3.846-4 4.811z" />
    </g>
  </svg>
);

export default SvgComponent;
