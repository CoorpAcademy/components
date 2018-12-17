import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M23 5h-5a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h5a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1h5a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1zM2 7h4v1H2V7zm0 3h4v1H2v-1zm0 3h4v1H2v-1zm0 4v-1h4v1H2zm14 1H8V6h8v12zm6-1h-4v-1h4v1zm0-3h-4v-1h4v1zm0-3h-4v-1h4v1zm0-3h-4V7h4v1z" />
      <Path d="M11 17h2v-1.051c1.14-.232 2-1.242 2-2.449 0-1.378-1.121-2.5-2.5-2.5h-1a.5.5 0 0 1 0-1H15V8h-2V7h-2v1.05c-1.14.233-2 1.242-2 2.45 0 1.378 1.122 2.5 2.5 2.5h1a.5.5 0 0 1 0 1H9v2h2v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
