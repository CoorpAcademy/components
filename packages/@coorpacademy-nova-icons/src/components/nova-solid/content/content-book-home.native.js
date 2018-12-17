import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .002h24v24H0z" />
    <G fill="currentColor">
      <Path d="M4 .002H1a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h3v-20zM6 20.001h2.059A8.668 8.668 0 0 1 8 19.003a9 9 0 0 1 9-9c.338 0 .672.022 1 .059v-9.06a1 1 0 0 0-1-1H6v19.999zM17.707 12.295a.999.999 0 0 0-1.414 0l-6 6 1.414 1.414L13 18.417v4.586a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-4.586l1.293 1.293 1.414-1.414-6-6.001zM18 22.003h-2v-3h2v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
