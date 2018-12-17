import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 6.998c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm0 8c-1.654 0-3-1.345-3-3 0-1.654 1.346-3 3-3s3 1.346 3 3-1.346 3-3 3zM11 .998h2v4h-2zM17.656 4.927L19.07 6.34l-1.414 1.415-1.414-1.414zM17.658 19.07l-1.415-1.415 1.414-1.415 1.415 1.415zM6.343 19.069L4.93 17.655l1.414-1.415 1.415 1.415zM6.344 4.927L7.758 6.34 6.344 7.755 4.93 6.341zM11 18.998h2v4h-2zM19 10.998h4v2h-4zM1 10.998h4v2H1z" />
    </G>
  </Svg>
);

export default SvgComponent;
