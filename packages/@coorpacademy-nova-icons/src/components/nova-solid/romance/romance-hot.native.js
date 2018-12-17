import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001 0h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M22.777 6.877a3.998 3.998 0 0 0 0-5.657c-1.511-1.511-4.146-1.512-5.656-.001L6.366 11.974A5.97 5.97 0 0 0 .05 17.948c0 3.314 2.683 6 6 6a5.972 5.972 0 0 0 5.975-6.317L22.777 6.877zM6.137 21.329s-3-3-3-4.5a1.5 1.5 0 0 1 3 0 1.5 1.5 0 0 1 3 0c0 1.5-3 4.5-3 4.5zm3.105-7.988l10-10 1.414 1.414-10 10-1.414-1.414z" />
      <Path d="M15.242 20.755l-2-2 1.415-1.414 2 2zM18.742 17.255l-2-2 1.415-1.414 2 2zM22.242 13.755l-2-2 1.415-1.414 2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
