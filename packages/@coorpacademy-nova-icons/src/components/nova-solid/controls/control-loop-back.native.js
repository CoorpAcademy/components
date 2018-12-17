import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13.293 13.707L16.586 17l-3.293 3.293 1.414 1.414L19.414 17l-4.707-4.707z" />
      <Path d="M20 4H4c-1.103 0-2 .897-2 2v10c0 1.104.897 2 2 2h6.586l-2.293 2.293 1.414 1.414L14.414 17l-4.707-4.707-1.414 1.414L10.586 16H4V6h16v4h2V6c0-1.103-.896-2-2-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
