import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M20 2a2 2 0 0 0-2-2H2C.897 0 0 .896 0 2v2h20V2zM18 10c.692 0 1.359.098 2 .263V6H0v8c0 1.102.897 2 2 2h8.263c.889-3.448 4.011-6 7.737-6zm-5-2h4v2h-4V8zm-5 5H3v-2h5v2zm2-3H3V8h7v2zM18.001 22c-1.077 0-2.064-.44-2.811-1.19L17.001 19h-5v5l1.764-1.763A6.03 6.03 0 0 0 18.001 24c3.309 0 6-2.69 6-6h-2c0 2.206-1.794 4-4 4z" />
      <Path d="M22.24 13.761A5.937 5.937 0 0 0 18.001 12c-3.309 0-6 2.691-6 6h2c0-2.205 1.794-4 4-4 1.078 0 2.065.441 2.812 1.189L19.001 17h5v-5l-1.761 1.761z" />
    </G>
  </Svg>
);

export default SvgComponent;
