import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 3.005c-3.421-1.14-8.912.604-9.765 4.106A6.945 6.945 0 0 1 8 6.005c3.866 0 7 3 7 7 0 6-5 7-11 7H2.007v2h9.067c2.118 0 3.677-.915 4.559-1.614.793.72 2.21 1.614 4.367 1.614h3v-2c-4-1 0-14-9-17z" />
      <Path d="M9 19.005v-4h2.414L6 9.591.586 15.005H3v4h6zm-2-2H5v-2h2v2z" />
    </G>
  </Svg>
);

export default SvgComponent;
