import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.002h24V24H0z" />
    <g fill="currentColor">
      <path d="M19.75 16.076V8a.75.75 0 0 0-.75-.75h-4a.75.75 0 0 0 0 1.5h3.25v3.5H11a.749.749 0 0 0-.651.378l-2.06 3.604A3.966 3.966 0 0 0 7 16c-2.206 0-4 1.795-4 4s1.794 4 4 4 4-1.795 4-4c0-.465-.095-.907-.243-1.323l7.493-4.37v1.77A4 4 0 0 0 15 20c0 2.205 1.794 4 4 4s4-1.795 4-4a4.002 4.002 0 0 0-3.25-3.924zM9 20c0 1.103-.897 2-2 2s-2-.897-2-2c0-1.104.897-2 2-2 .09 0 .177.016.264.026l-.915 1.602a.75.75 0 0 0 1.03 1.02l1.594-.93c.012.093.027.185.027.282zm1-2.618a3.806 3.806 0 0 0-.409-.404l1.844-3.228h4.791L10 17.382zM19 22c-1.103 0-2-.897-2-2 0-.838.518-1.554 1.25-1.852V20a.75.75 0 0 0 1.5 0v-1.852A2.001 2.001 0 0 1 21 20c0 1.103-.897 2-2 2zM4 14a1 1 0 0 0 1.814.582l5-7A1 1 0 0 0 10 6H8V2a1 1 0 0 0-1.814-.581l-5 7A1 1 0 0 0 2 10h2v4zm-.057-6L6 5.121V7a1 1 0 0 0 1 1h1.057L6 10.879V9a1 1 0 0 0-1-1H3.943z" />
    </g>
  </svg>
);

export default SvgComponent;
