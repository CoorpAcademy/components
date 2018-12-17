import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M8 13.667A3.333 3.333 0 0 0 11.333 17c3.667 0 6.667-6 0-10C12.444 11.444 10 12.833 10 12.833v-2.255a3.39 3.39 0 0 0-2 3.089zM0 2h24v3H0zM2 7h4v2H2zM2 11h4v2H2zM2 15h4v2H2zM18 7h4v2h-4zM18 11h4v2h-4zM18 15h4v2h-4zM2 19h20v4H2z" />
    </G>
  </Svg>
);

export default SvgComponent;
