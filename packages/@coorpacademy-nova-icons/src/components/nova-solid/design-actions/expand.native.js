import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 8h2v2h-2zM20 5h2v2h-2zM5 20h2v2H5zM8 20h2v2H8zM11 20h2v2h-2zM14 20h2v2h-2zM17 20h2v2h-2zM20 20h2v2h-2zM20 11h2v2h-2zM20 14h2v2h-2zM20 17h2v2h-2zM13.293 2.707L14.586 4H4v10.586l-1.293-1.293-1.414 1.414L5 18.414l3.707-3.707-1.414-1.414L6 14.586V6h8.586l-1.293 1.293 1.414 1.414L18.414 5l-3.707-3.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
