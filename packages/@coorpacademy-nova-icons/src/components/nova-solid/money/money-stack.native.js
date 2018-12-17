import React from "react";
import Svg, { Path } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      fill="currentColor"
      d="M18 5a1 1 0 0 0-1-1H7c-.552 0-1 .449-1 1H0v14h6a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1h6V5h-6zM6 17H2v-1h4v1zm0-3H2v-1h4v1zm0-3H2v-1h4v1zm0-3H2V7h4v1zm9.001 2h-3.5a.5.5 0 0 0 0 1h1c1.378 0 2.5 1.122 2.5 2.5 0 1.207-.86 2.217-2 2.449V17h-2v-1h-2v-2h3.5a.5.5 0 0 0 0-1h-1a2.503 2.503 0 0 1-2.5-2.5c0-1.208.86-2.217 2-2.449V6.999h2v1h2V10zM22 17h-4v-1h4v1zm0-3h-4v-1h4v1zm0-3h-4v-1h4v1zm0-3h-4V7h4v1z"
    />
  </Svg>
);

export default SvgComponent;
