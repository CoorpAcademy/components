import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M18 9c0-4.962-4.037-9-9-9S0 4.038 0 9s4.038 9 9 9a8.918 8.918 0 0 0 3.189-.595 6.997 6.997 0 0 1 5.216-5.215A8.953 8.953 0 0 0 18 9zm-6.555 2.832L8 9.535V4h2v4.465l2.555 1.703-1.11 1.664zM22.292 17.292L20 19.585V14h-2v5.585l-2.293-2.293-1.415 1.414L19 23.413l4.706-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
