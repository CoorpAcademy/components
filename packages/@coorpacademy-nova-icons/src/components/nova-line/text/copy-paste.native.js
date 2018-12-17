import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 8V6a1 1 0 0 0-1-1h-1V4h3l-.001 4H16V4c0-1.103-.896-2-2-2h-3V1a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v1H2C.897 2 0 2.896 0 4v14c0 1.103.897 2 2 2h8v-2H2V4h3v1H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h6v-2H5V7h6v1h2zM9 5H7V2h2v3z" />
      <Path d="M23 10H13a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V11a1 1 0 0 0-1-1zm-1 12h-8V12h8v10z" />
      <Path d="M15 16h6v2h-6zM17 13h4v2h-4zM15 19h6v2h-6z" />
    </G>
  </Svg>
);

export default SvgComponent;
