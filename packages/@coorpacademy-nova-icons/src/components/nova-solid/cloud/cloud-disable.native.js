import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .004h24v24H0z" />
    <G fill="currentColor">
      <Path d="M11.369 10.217l5.055-5.055A6.888 6.888 0 0 0 15 5c-2.51 0-4.74 1.31-5.979 3.357.762.361 1.565.953 2.348 1.86zM3.793 17.793l6.875-6.875C9.383 9.361 8.232 9 7 9c-2.757 0-5 2.243-5 5 0 1.529.705 2.881 1.793 3.793zM21.207 3.207l-18 18 1.414 1.414L8.242 19H15c3.859 0 7-3.14 7-7 0-1.868-.74-3.564-1.938-4.82l2.559-2.559-1.414-1.414z" />
    </G>
  </Svg>
);

export default SvgComponent;
