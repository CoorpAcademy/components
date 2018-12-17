import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M12.836 2.452a1 1 0 0 0-1.658-.019C10.545 3.348 5 11.476 5 15c0 3.86 3.141 7 7 7s7-3.14 7-7c0-3.276-4.7-10.407-6.164-12.548zM12 20c-2.757 0-5-2.243-5-5 0-1.934 2.795-6.841 4.998-10.204C14.539 8.67 17 13.188 17 15c0 2.757-2.243 5-5 5z" />
      <Path d="M11.11 9.544C10.615 10.508 9 13.752 9 15c0 1.654 1.346 3 3 3v-2c-.551 0-1-.449-1-.999.01-.535.985-2.782 1.89-4.544l-1.78-.913z" />
    </G>
  </Svg>
);

export default SvgComponent;
