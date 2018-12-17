import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M13 21h-1v-2a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2H5v-7a1 1 0 0 0-1-1h-.016L9 9.213l2 1.51V8.218L9.603 7.162a1 1 0 0 0-1.205 0l-8 6.04A1.001 1.001 0 0 0 1 15h2v7a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2h2v2a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-4h-2v3z" />
      <Path d="M21.178 7.571a1.002 1.002 0 0 0-1.527-.136L19 8.086V3a1 1 0 0 0-1.83-.558C16.744 3.073 13 8.72 13 12.071 13 14.79 15.243 17 18 17s5-2.21 5-4.929c0-1.832-1.636-4.232-1.822-4.5zM18 15c-1.626 0-3-1.341-3-2.929 0-1.385.981-3.58 2-5.463V10.5a.998.998 0 1 0 1.707.706l1.461-1.46c.434.792.832 1.719.832 2.325C21 13.659 19.626 15 18 15z" />
    </G>
  </Svg>
);

export default SvgComponent;
