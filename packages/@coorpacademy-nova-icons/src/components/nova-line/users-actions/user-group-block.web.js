import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M10.002 17.006c0-2.305-1.576-4.231-3.702-4.808a2.994 2.994 0 0 0 1.702-2.692c0-1.654-1.346-3-3-3s-3 1.346-3 3c0 1.188.699 2.207 1.702 2.692-2.126.576-3.702 2.503-3.702 4.808v2a1 1 0 0 0 1 1h1v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-3h1a1 1 0 0 0 1-1v-2zm-5-8.5c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .45-1 1-1zm3 9.5h-1a1 1 0 0 0-1 1v3h-2v-3a1 1 0 0 0-1-1h-1v-1c0-1.654 1.346-3 3-3s3 1.346 3 3v1zM15.756 18.429a2.99 2.99 0 0 0 1.246-2.423c0-1.654-1.346-3-3-3s-3 1.346-3 3a2.99 2.99 0 0 0 1.246 2.423c-1.324.652-2.246 2.004-2.246 3.577v1a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-1c0-1.573-.921-2.925-2.246-3.577zm-1.754-3.423c.551 0 1 .449 1 1s-.449 1-1 1-1-.449-1-1 .45-1 1-1zm-2 7a2 2 0 0 1 4 0h-4zM18.002.006c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6zm0 2c.739 0 1.424.215 2.02.566l-5.453 5.452a3.946 3.946 0 0 1-.566-2.019 4.004 4.004 0 0 1 3.999-3.999zm0 8a3.965 3.965 0 0 1-2.02-.566l5.453-5.453c.352.596.566 1.28.566 2.02a4.003 4.003 0 0 1-3.999 3.999z" />
    </g>
  </svg>
);

export default SvgComponent;
