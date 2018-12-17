import React from "react";
import Svg, { Path, G } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24.002H.001z" />
    <G fill="currentColor">
      <Path d="M4.199 9.502c.331 0 .644-.164.831-.442L7.8 4.932 1.614 4.14l1.641 4.692c.14.402.519.67.944.67zM18.085 11.281c.331 0 .644-.165.831-.444l2.77-4.127-6.186-.793 1.641 4.693a1 1 0 0 0 .944.671zM19.263 20.256c.227.311.61.46.974.395a.999.999 0 0 0 .791-.693l1.451-4.756-6.15 1.039 2.934 4.015zM12.361 21.422a1 1 0 0 0 1.765-.299l1.451-4.755-6.149 1.04 2.933 4.014zM5.458 22.589a1.001 1.001 0 0 0 1.765-.298l1.451-4.756-6.149 1.04 2.933 4.014zM11.142 10.392c.331 0 .643-.164.831-.443l2.77-4.128-6.186-.793 1.641 4.693c.142.406.524.671.944.671zM24 3.982L.001.908v2.016L24 5.998zM24 11.902L.001 15.959v2.027L24 13.93z" />
    </G>
  </Svg>
);

export default SvgComponent;
