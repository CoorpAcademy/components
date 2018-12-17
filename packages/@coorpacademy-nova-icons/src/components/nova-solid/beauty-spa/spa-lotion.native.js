import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M3 12a2 2 0 0 0 4 0c0-1.5-2-4-2-4s-2 2.5-2 4zM18 4V2H8.586L6.293 4.293l1.414 1.414L9.414 4zM15 7.102V5h-2v2.102A5 5 0 0 0 9 12v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-8a5 5 0 0 0-4-4.898zM17 15h-6v-3h6v3z" />
    </G>
  </Svg>
);

export default SvgComponent;
