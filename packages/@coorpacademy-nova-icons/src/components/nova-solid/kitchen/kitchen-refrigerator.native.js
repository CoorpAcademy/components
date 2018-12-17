import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M16 2H8c-1.103 0-2 .897-2 2v5h12V4c0-1.103-.896-2-2-2zm-6 5H8V4h2v3zM6 20c0 1.103.897 2 2 2h8c1.104 0 2-.897 2-2V10H6v10zm2-8h2v4H8v-4z" />
    </G>
  </Svg>
);

export default SvgComponent;
