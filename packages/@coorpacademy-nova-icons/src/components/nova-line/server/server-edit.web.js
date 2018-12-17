import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 .004h24v24H0z" />
    <path fill="currentColor" d="M3 3h5v2H3zM3 9h5v2H3zM3 15h5v2H3z" />
    <circle cx={13} cy={4} r={1} fill="currentColor" />
    <circle cx={16} cy={4} r={1} fill="currentColor" />
    <circle cx={13} cy={10} r={1} fill="currentColor" />
    <circle cx={16} cy={10} r={1} fill="currentColor" />
    <path
      d="M10 18H2v-4h12v-2H2V8h15.999v1.002L18 9h2V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v16c0 1.103.896 2 2 2h8v-2zM2 2h16l-.001 4H2V2zM20.707 11.293a.999.999 0 0 0-1.414 0l-7 7a1.01 1.01 0 0 0-.263.465l-1.001 4a1.002 1.002 0 0 0 1.213 1.213l4-1c.177-.045.337-.137.465-.264l7-7a.999.999 0 0 0 0-1.414l-3-3zm-5.219 9.803l-2.115.529.53-2.113L17 16.414 18.586 18l-3.098 3.096zM20 16.586L18.414 15 20 13.414 21.586 15 20 16.586z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
