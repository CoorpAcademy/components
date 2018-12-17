import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 1.999c-5.514 0-10 4.486-10 10 0 5.515 4.486 10 10 10s10-4.485 10-10c0-5.514-4.486-10-10-10zm0 18c-4.411 0-8-3.588-8-8 0-4.411 3.589-8 8-8s8 3.589 8 8c0 4.412-3.589 8-8 8z" />
      <Path d="M16 8.999h-.382a.999.999 0 0 1-.895-.552l-.447-.894a1 1 0 0 0-.895-.554h-2.764a1 1 0 0 0-.895.554l-.446.893a.998.998 0 0 1-.894.553H8a1 1 0 0 0-1 1v5c0 .554.447 1 1 1h8c.553 0 1-.446 1-1v-5a1 1 0 0 0-1-1zm-4 5a2 2 0 1 1 .001-4.001A2 2 0 0 1 12 13.999z" />
    </G>
  </Svg>
);

export default SvgComponent;
