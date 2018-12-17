import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M17 8c.338 0 .671.023 1 .059V4.586L13.414 0H2C.897 0 0 .897 0 2v18c0 1.103.897 2 2 2h7.518A9 9 0 0 1 17 8zm-5-7l5 5h-5V1zM17.25 15h-1v2h1a1.001 1.001 0 0 0 0-2z" />
      <Path d="M17 10a7 7 0 0 0-7 7c0 3.867 3.134 7 7 7s7-3.133 7-7a7 7 0 0 0-7-7zm3.25 11h-2.315l-1.168-2h-.517v2H14v-8h3.25c1.653 0 3 1.346 3 3a2.988 2.988 0 0 1-1.433 2.546L20.25 21z" />
    </G>
  </Svg>
);

export default SvgComponent;
