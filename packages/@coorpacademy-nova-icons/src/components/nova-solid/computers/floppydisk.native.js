import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 6h2v3h-2z" />
      <Path d="M20.414 6.414l-2.828-2.828A2 2 0 0 0 16.172 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.828a2 2 0 0 0-.586-1.414zM12 17.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm4-7.5H6V5h10v5z" />
    </G>
  </Svg>
);

export default SvgComponent;
