import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.998 14a6 6 0 0 1-6-6c0-.67.114-1.312.316-1.912A10.96 10.96 0 0 0 10.998 6c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.572 4.836L-.002 24h11c5.514 0 10-4.037 10-9 0-.582-.066-1.15-.185-1.703a5.973 5.973 0 0 1-2.815.703z" />
      <Path d="M21.705 5.707l-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414L16.584 8l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L19.412 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
