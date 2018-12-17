import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 18.001H6v-16h10v10h2v-11a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h11v-2zm-8 0H2v-16h2v16zM22.293 17.294L20 19.587v-5.586h-2v5.586l-2.293-2.293-1.414 1.414L19 23.415l4.707-4.707z" />
    </G>
  </Svg>
);

export default SvgComponent;
