import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17.719 6.69A.995.995 0 0 0 18 6V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v3c0 .269.109.511.281.69A4.96 4.96 0 0 0 5 10v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10a4.96 4.96 0 0 0-1.281-3.31zM10 7h4c1.654 0 3 1.346 3 3v10H7V10c0-1.655 1.346-3 3-3zM8 4h8v1H8V4z" />
      <Path d="M10.296 17.556L12 15l-2-2 2.905-3.874A3.53 3.53 0 0 0 12 9c-2.209 0-4 2.015-4 4.5 0 1.795.942 3.334 2.296 4.056z" />
      <Path d="M14 14l-2.905 3.874c.292.076.593.126.905.126 2.209 0 4-2.016 4-4.5 0-1.797-.942-3.334-2.296-4.057L12 12l2 2z" />
    </G>
  </Svg>
);

export default SvgComponent;
