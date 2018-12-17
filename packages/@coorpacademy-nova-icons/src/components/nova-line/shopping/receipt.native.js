import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M19.526 2.15a1 1 0 0 0-.974-.044l-3.48 1.74-2.518-1.678a1 1 0 0 0-1.109 0L8.929 3.846l-3.481-1.74A.998.998 0 0 0 4 3v18a1.001 1.001 0 0 0 1.447.895l3.481-1.74 2.517 1.677a.995.995 0 0 0 1.109 0l2.517-1.677 3.481 1.74A1 1 0 0 0 20 21V3a1 1 0 0 0-.474-.85zM18 19.382l-2.553-1.276a.999.999 0 0 0-1.002.062L12 19.798l-2.445-1.63a1.004 1.004 0 0 0-1.002-.062L6 19.382V4.619l2.553 1.275a1 1 0 0 0 1.002-.063L12 4.202l2.445 1.629a1 1 0 0 0 1.002.063L18 4.619v14.763z" />
      <Path d="M7 8h5v2H7zM15 8h2v2h-2zM7 11h4v2H7zM15 11h2v2h-2zM7 14h6v2H7zM15 14h2v2h-2z" />
    </G>
  </Svg>
);

export default SvgComponent;
