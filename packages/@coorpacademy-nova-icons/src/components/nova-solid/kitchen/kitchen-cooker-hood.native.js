import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M7 17l-.707-.707c-1.289 1.288-2.354 4.061 0 6.413l1.414-1.413c-1.684-1.684-.291-3.286.004-3.59L7 17zM11.287 16.701c.3.31 1.186 1.412.006 2.592l1.414 1.413c1.986-1.986 1.088-4.326 0-5.413l-1.42 1.408zM17.279 17.555c.016.023 1.529 2.334.125 3.738l1.414 1.413c2.041-2.04.975-4.988.125-6.261l-1.664 1.11zM17 5.586V3a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v2.586L2.586 10h18.828L17 5.586zM2 11v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
