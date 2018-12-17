import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 19.001H4v-14h12v3h2v-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8v-3z" />
      <Path d="M22 12.001a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-8zm-2 7h-4v-7h4v7z" />
    </G>
  </Svg>
);

export default SvgComponent;
