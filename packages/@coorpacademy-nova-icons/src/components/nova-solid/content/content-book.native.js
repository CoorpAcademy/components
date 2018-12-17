import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11 5.321L9.625 4.22A1.001 1.001 0 0 0 9 4.001H3a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h5.649L11 20.85V5.321zM20 4.001h-6c-.227 0-.447.077-.625.219L12 5.321V20.85L14.351 19H20a1 1 0 0 0 1-1V5a1 1 0 0 0-1-.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
