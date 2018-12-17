import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12.5 3C9.738 3 7.11 3.948 5 5.644V4H3v5h5V7H6.511c1.713-1.284 3.8-2 5.989-2a9.98 9.98 0 0 1 7.714 3.637l1.542-1.273A11.969 11.969 0 0 0 12.5 3z" />
      <Path d="M17.31 14.06l-2.316-.772v-6.28H13v5.612l-1.007-.333V8.008H10v7H8.993a1 1 0 0 0-.895 1.447l2 4a1 1 0 0 0 .895.553h6a1 1 0 0 0 1-1v-5a.997.997 0 0 0-.683-.948zM16 19.008h-4.389l-1-2h.382a1 1 0 0 0 1-1v-1.613L16 15.729v3.279z" />
    </G>
  </Svg>
);

export default SvgComponent;
