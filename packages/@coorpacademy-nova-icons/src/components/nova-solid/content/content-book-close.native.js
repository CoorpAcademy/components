import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 .001H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM18 14.35V1.001a1 1 0 0 0-1-1H6v20h8a5.998 5.998 0 0 1 4-5.651zM23.707 17.708l-1.414-1.414L20 18.587l-2.293-2.293-1.414 1.414 2.293 2.293-2.293 2.293 1.414 1.414L20 21.415l2.293 2.293 1.414-1.414-2.293-2.293z" />
    </G>
  </Svg>
);

export default SvgComponent;
