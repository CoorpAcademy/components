import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Circle cx={15} cy={8.997} r={1.998} />
      <Path d="M19.95 4.049A6.952 6.952 0 0 0 15 1.998c-1.869 0-3.627.73-4.949 2.052-.1.099-6.57 9.365-6.65 9.48A4.955 4.955 0 0 0 2 16.998c0 1.337.52 2.592 1.464 3.536A4.966 4.966 0 0 0 7 22a4.966 4.966 0 0 0 3.471-1.402c.119-.083 9.376-6.548 9.479-6.65A6.952 6.952 0 0 0 22 9a6.96 6.96 0 0 0-2.05-4.951zM7 18.998a2 2 0 1 1-.001-3.999A2 2 0 0 1 7 18.998zm8-6.003a4.002 4.002 0 0 1-3.998-3.997C11.002 6.793 12.796 5 15 5s3.998 1.793 3.998 3.998A4.002 4.002 0 0 1 15 12.995z" />
    </G>
  </Svg>
);

export default SvgComponent;
