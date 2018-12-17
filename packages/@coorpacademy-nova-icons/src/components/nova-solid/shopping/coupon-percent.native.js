import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M23 10h1V3H0v7h1c1.103 0 2 .898 2 2 0 1.102-.897 2-2 2H0v7h24v-7h-1c-1.104 0-2-.898-2-2 0-1.102.896-2 2-2zM6 6a2 2 0 1 1-.001 4.001A2 2 0 0 1 6 6zm-1.707 9.293l9-9 1.414 1.413-9 9-1.414-1.413zM13 17a2 2 0 1 1-.001-3.999A2 2 0 0 1 13 17zm5 2h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2V9h2v2zm0-4h-2V5h2v2z"
    />
  </Svg>
);

export default SvgComponent;
