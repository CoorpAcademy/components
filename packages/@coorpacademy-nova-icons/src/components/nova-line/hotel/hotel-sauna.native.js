import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24.001H0z" />
    <G fill="currentColor">
      <Path d="M3 16h3v2H3zM3 13h3v2H3zM3 10h3v2H3zM3 19h9v3H3zM13 6c0-1.654-1.346-3-3-3S7 4.346 7 6s1.346 3 3 3 3-1.346 3-3zm-3 1c-.551 0-1-.449-1-1 0-.551.449-1 1-1s1 .449 1 1c0 .551-.449 1-1 1zM17.883 2.8l-1.2-1.6c-2.8 2.1-1.434 3.921-.7 4.9.745.993.9 1.2-.3 2.1l1.2 1.6c2.8-2.1 1.434-3.922.7-4.9-.745-.993-.9-1.2.3-2.1zM22.017 4.9c-.745-.993-.9-1.2.3-2.1l-1.2-1.6c-2.8 2.1-1.434 3.921-.7 4.9.745.993.9 1.2-.3 2.1l1.2 1.6c2.8-2.1 1.433-3.922.7-4.9z" />
      <Path d="M13 12c0-1.654-1.346-3-3-3s-3 1.346-3 3v5h7v5h2v-7h-3v-3zm-4 3v-3c0-.551.449-1 1-1s1 .449 1 1v3H9z" />
    </G>
  </Svg>
);

export default SvgComponent;
