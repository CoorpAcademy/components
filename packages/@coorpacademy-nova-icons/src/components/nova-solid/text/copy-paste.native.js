import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 6a1 1 0 0 0-1-1h-1V4h3l-.001 4H16V4c0-1.103-.896-2-2-2h-3V1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H2C.897 2 0 2.897 0 4v14c0 1.103.897 2 2 2h8v-2H2V4h3v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6V8h3V6zM9 5H7V2h2v3z" />
      <Path d="M12 9.998v14h12v-14H12zm9 11h-6v-1h6v1zm0-3h-6v-1h6v1zm0-3h-4v-1h4v1z" />
    </G>
  </Svg>
);

export default SvgComponent;
