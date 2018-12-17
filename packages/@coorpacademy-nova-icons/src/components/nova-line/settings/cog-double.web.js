import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0 0h24v24H0z" />
    <g fill="currentColor">
      <path d="M19.726 14H17.65c-.826 2.328-3.044 4-5.65 4-3.309 0-6-2.69-6-6 0-2.606 1.674-4.823 4-5.65V4.274a7.977 7.977 0 0 0-2.493 1.111L5.989 3.868 3.868 5.989l1.518 1.518A7.913 7.913 0 0 0 4.264 10H2v4h2.264a7.903 7.903 0 0 0 1.122 2.493l-1.518 1.518 2.121 2.122 1.518-1.518A7.99 7.99 0 0 0 10 19.737V22h4v-2.263a7.968 7.968 0 0 0 2.493-1.122l1.518 1.518 2.121-2.122-1.518-1.518A7.98 7.98 0 0 0 19.726 14z" />
      <path d="M22 7.909V6.09h-1.492a3.585 3.585 0 0 0-.358-.876l.941-.942-1.363-1.363-.943.941a3.537 3.537 0 0 0-.877-.358V2h-1.817v1.492a3.546 3.546 0 0 0-.876.358l-.942-.941-1.364 1.363.942.942a3.627 3.627 0 0 0-.359.876H12v1.818h1.491c.082.312.204.604.359.877l-.942.942 1.364 1.363.942-.94c.272.155.564.277.876.358V12h1.817v-1.491c.313-.082.604-.203.877-.358l.942.94 1.363-1.363-.941-.942c.155-.273.277-.565.358-.877H22zM17 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
    </g>
  </svg>
);

export default SvgComponent;
