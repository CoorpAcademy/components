import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M20 6V5h-2v1h-2V4a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H6V5H4v1c-1.103 0-2 .897-2 2v12c0 1.104.897 2 2 2h16a2 2 0 0 0 2-2V8c0-1.103-.896-2-2-2zM10 5h4v1h-4V5zm5 7h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5a2.505 2.505 0 0 1-2 2.45V19h-2v-1H9v-2h3.5a.5.5 0 0 0 0-1h-1A2.503 2.503 0 0 1 9 12.5c0-1.207.859-2.217 2-2.449V9h2v1h2v2z"
    />
  </Svg>
);

export default SvgComponent;
