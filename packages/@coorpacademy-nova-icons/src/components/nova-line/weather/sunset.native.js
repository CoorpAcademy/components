import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2h2v3h-2zM19.364 4.221l1.414 1.414-2.122 2.122-1.414-1.414zM20 11h3v2h-3zM19.364 19.779l-2.122-2.122 1.414-1.414 2.122 2.122zM12 19h2v3h-2zM6.636 19.78l-1.413-1.414 2.121-2.122 1.414 1.413zM3 11h3v2H3zM6.635 4.222l2.122 2.122-1.414 1.414-2.122-2.122zM9.293 11.707l3 3a.997.997 0 0 0 1.414 0l3-3-1.414-1.414L14 11.586V7h-2v4.586l-1.293-1.293-1.414 1.414z" />
      <Path d="M16.655 7.243l-1.22 1.584A3.974 3.974 0 0 1 17 12c0 2.206-1.794 4-4 4s-4-1.794-4-4c0-1.263.577-2.425 1.584-3.189L9.375 7.219A5.956 5.956 0 0 0 7 12c0 3.309 2.691 6 6 6s6-2.691 6-6a5.958 5.958 0 0 0-2.345-4.757z" />
    </G>
  </Svg>
);

export default SvgComponent;
