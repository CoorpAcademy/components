import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M21.141 8.098a3 3 0 0 0-4.24-4.239l4.24 4.239zM2.859 8.098a3 3 0 0 1 4.24-4.239l-4.24 4.239zM12 4c-4.962 0-9 4.038-9 9s4.038 9 9 9 9-4.038 9-9-4.038-9-9-9zm2.293 12.706l-3-3A1 1 0 0 1 11 13V8h2v4.586l2.707 2.707-1.414 1.413z" />
    </G>
  </Svg>
);

export default SvgComponent;
