import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .003h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 18a1 1 0 1 1 0-2c.469 0 .844.33.952.766A5.99 5.99 0 0 1 19 14H0v4c0 1.103.896 2 2 2h11c0-.731.137-1.428.377-2.076A.991.991 0 0 1 13 18zm-5 0H3v-2h5v2zM20 6V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v4h20zm-4-4a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2zM3 2h5v2H3V2zM0 13h20V7H0v6zm16-4a1 1 0 1 1 0 2 1 1 0 1 1 0-2zm-3 0a1 1 0 1 1 0 2 1 1 0 1 1 0-2zM8 9v2H3V9h5zM18 23.414l-3.707-3.707 1.414-1.414L18 20.586l4.293-4.293 1.414 1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
