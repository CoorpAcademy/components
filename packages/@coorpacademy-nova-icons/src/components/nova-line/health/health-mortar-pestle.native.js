import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M2 13h1.059c.34 3.056 2.217 5.65 4.838 7H6v2h12v-2h-1.896c2.621-1.35 4.498-3.944 4.838-7H22v-2H2v2zm10 6c-3.52 0-6.433-2.613-6.92-6h13.84c-.487 3.387-3.4 6-6.92 6zM19.115 4.007c.497.057.885.477.89.928-.125.609-1.847 3.027-3.485 5.065h2.551C20.6 8.015 22 5.943 22 5.001c0-1.654-1.346-3-3-3-.411 0-1.508.016-9.416 7.999h2.834c2.894-2.848 5.866-5.573 6.697-5.993z" />
    </G>
  </Svg>
);

export default SvgComponent;
