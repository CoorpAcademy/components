import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M14 10.5c1.93 0 3.5-1.57 3.5-3.5S15.93 3.5 14 3.5 10.5 5.07 10.5 7s1.57 3.5 3.5 3.5zm0-5c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5z" />
      <Path d="M23 0H5a1 1 0 0 0-1 1v11.08c.328-.047.66-.08 1-.08.348 0 .666.034 1 .083.029-.029 0-3.668 0-3.668l2.182 2.181a6.95 6.95 0 0 1 2.261-.567L6 5.586V2h9.586L22 8.415V12h-6.106a7.02 7.02 0 0 1 1.423 2H23a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1zm-1 5.586L18.414 2H22v3.586z" />
      <Path d="M11 12c-1.78 0-3.336.943-4.222 2.348A4.866 4.866 0 0 0 5 14c-2.757 0-5 2.243-5 5s2.243 5 5 5c1.777 0 3.321-.944 4.205-2.347A4.94 4.94 0 0 0 11 22c2.757 0 5-2.243 5-5s-2.243-5-5-5zM5 22c-1.654 0-3-1.346-3-3s1.346-3 3-3c.382 0 .745.076 1.08.208-.042.261-.08.521-.08.792 0 1.41.591 2.679 1.533 3.589A2.99 2.99 0 0 1 5 22zm6-2c-1.654 0-3-1.346-3-3s1.346-3 3-3 3 1.346 3 3-1.346 3-3 3z" />
    </G>
  </Svg>
);

export default SvgComponent;
