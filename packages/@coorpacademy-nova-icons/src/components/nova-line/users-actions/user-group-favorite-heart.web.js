import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10.002 17.006c0-2.305-1.576-4.231-3.702-4.808a2.994 2.994 0 0 0 1.702-2.692c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.188.699 2.207 1.702 2.692-2.126.576-3.702 2.503-3.702 4.808v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-2zm-5-8.5c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .45-1 1-1zm3 9.5h-1a1 1 0 0 0-1 1v3h-2v-3a1 1 0 0 0-1-1h-1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1zM15.756 18.429a2.99 2.99 0 0 0 1.246-2.423c0-1.654-1.346-3-3-3s-3 1.346-3 3a2.99 2.99 0 0 0 1.246 2.423c-1.324.652-2.246 2.004-2.246 3.577v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c0-1.573-.921-2.925-2.246-3.577zm-1.754-3.423c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .45-1 1-1zm-2 7a2 2 0 0 1 4 0h-4z" />
    </g>
    <path
      d="M18.002 11.006a.997.997 0 0 1-.515-.143c-.562-.337-5.485-3.391-5.485-6.857 0-2.393 1.607-4 4-4 .735 0 1.451.332 2 .846.549-.514 1.265-.846 2-.846 2.393 0 4 1.607 4 4 0 3.467-4.924 6.521-5.485 6.857a.994.994 0 0 1-.515.143zm-2-9c-1.805 0-2 1.398-2 2 0 1.738 2.578 3.846 4 4.811 1.422-.965 4-3.072 4-4.811 0-.602-.195-2-2-2-.449 0-1 .551-1 1a1 1 0 1 1-2 0c0-.449-.55-1-1-1z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
