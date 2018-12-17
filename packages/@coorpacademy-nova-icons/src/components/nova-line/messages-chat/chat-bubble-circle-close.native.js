import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M10.998 22H3.291l1.328-1.43c.348-.375.356-.952.021-1.338C3.566 18 2.998 16.537 2.998 15c0-3.859 3.589-7 8-7V6c-5.514 0-10 4.037-10 9 0 1.735.541 3.392 1.572 4.836L.266 22.32A.998.998 0 1 0 .998 24h10c5.514 0 10-4.037 10-9h-2c0 3.86-3.589 7-8 7z" />
      <Path d="M21.705 5.707l-1.414-1.414-2.293 2.293-2.293-2.293-1.414 1.414L16.584 8l-2.293 2.293 1.414 1.414 2.293-2.293 2.293 2.293 1.414-1.414L19.412 8z" />
    </G>
  </Svg>
);

export default SvgComponent;
