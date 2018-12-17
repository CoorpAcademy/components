import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      d="M14.273 19A7.971 7.971 0 0 0 17 13c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8h13v-2h-7.727zm-.388-2.528l-1.452-1.453c.352-.595.567-1.28.567-2.019s-.215-1.424-.567-2.02l1.452-1.451a5.961 5.961 0 0 1 0 6.943zM7 13c0-1.104.897-2 2-2s2 .896 2 2c0 1.103-.897 2-2 2s-2-.897-2-2zm5.471-4.885l-1.452 1.452C10.424 9.216 9.739 9 9 9s-1.424.216-2.019.567L5.529 8.115a5.961 5.961 0 0 1 6.942 0zM4.115 9.529l1.452 1.451C5.215 11.576 5 12.261 5 13s.215 1.424.567 2.019l-1.452 1.453a5.964 5.964 0 0 1 0-6.943zm1.414 8.357l1.452-1.452C7.576 16.785 8.261 17 9 17s1.424-.215 2.019-.566l1.452 1.452a5.967 5.967 0 0 1-6.942 0z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
