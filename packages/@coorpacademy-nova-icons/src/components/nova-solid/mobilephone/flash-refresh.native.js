import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24H0z" />
    <G fill="currentColor">
      <Path d="M16 11h-3V6l-5 7h3v5z" />
      <Path d="M4.264 10C5.154 6.555 8.28 4 12 4c3.512 0 6.496 2.277 7.568 5.431L17 12h6V6l-1.893 1.893C19.537 4.424 16.049 2 12 2c-4.829 0-8.869 3.441-9.799 8h2.063zM19.736 14c-.891 3.445-4.017 6-7.736 6-3.512 0-6.496-2.277-7.568-5.431L7 12H1v6l1.893-1.893C4.463 19.576 7.951 22 12 22c4.829 0 8.869-3.441 9.799-8h-2.063z" />
    </G>
  </Svg>
);

export default SvgComponent;
