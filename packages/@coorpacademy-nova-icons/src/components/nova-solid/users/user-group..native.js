import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M9.359 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M11.718 22a3.99 3.99 0 0 0-3.858-3h-2a3.991 3.991 0 0 0-3.859 3h9.717zM19.643 15.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M22.001 22a3.99 3.99 0 0 0-3.858-3h-2a3.991 3.991 0 0 0-3.859 3h9.717zM14.501 4.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M16.859 11a3.99 3.99 0 0 0-3.858-3h-2a3.991 3.991 0 0 0-3.859 3h9.717z" />
    </G>
  </Svg>
);

export default SvgComponent;
