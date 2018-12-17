import React from "react";

const SvgComponent = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <path fill="none" d="M0-.001h24v24H0z" />
    <circle cx={8} cy={11} r={2} fill="currentColor" />
    <circle cx={16} cy={11} r={2} fill="currentColor" />
    <path fill="currentColor" d="M12 13l-2 3h4z" />
    <path
      d="M16.5 22a3.488 3.488 0 0 1-2.322-.888c-.026.027-.052.056-.08.083-.366.367-1.027.805-2.098.805s-1.732-.438-2.098-.805a2.22 2.22 0 0 1-.083-.087A3.47 3.47 0 0 1 7.5 22C5.57 22 4 20.429 4 18.5v-1.881l-1.447-.725A1 1 0 0 1 2 15v-3C2 6.486 6.486 2 12 2s10 4.486 10 10v3c0 .379-.214.725-.553.895L20 16.619V18.5c0 1.929-1.57 3.5-3.5 3.5zM14 17.504c.509 0 .942.389.995.902 0 0 .011.105.012.281.056.704.713 1.313 1.493 1.313.827 0 1.5-.673 1.5-1.5V16c0-.379.214-.725.553-.894L20 14.381V12c0-4.411-3.589-8-8-8s-8 3.589-8 8v2.382l1.447.724A.997.997 0 0 1 6 16v2.5c0 .827.673 1.5 1.5 1.5.779 0 1.436-.606 1.496-1.382v-.003c-.002-.104.009-.208.009-.208.055-.53.522-.932 1.047-.9A.994.994 0 0 1 11 18.5c0 .09-.003.179-.01.266.002.295.087.774.329 1.017.053.053.216.217.681.217s.628-.163.682-.217c.242-.243.327-.722.326-1.089A1.448 1.448 0 0 1 13 18.5c0-.531.417-.966.949-.994.017-.002.034-.002.051-.002z"
      fill="currentColor"
    />
  </svg>
);

export default SvgComponent;
