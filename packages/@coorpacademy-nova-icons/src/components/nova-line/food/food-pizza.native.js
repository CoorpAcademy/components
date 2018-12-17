import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 .001h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M17.702 10.531L12 13.382V7a1 1 0 0 0-1-1c-4.963 0-9 4.038-9 9s4.037 9 9 9 9-4.038 9-9a8.897 8.897 0 0 0-.957-4.022.997.997 0 0 0-1.341-.447zM11 22c-3.859 0-7-3.14-7-7 0-3.521 2.612-6.442 6-6.929V15a1.001 1.001 0 0 0 1.448.895l6.193-3.096c.238.708.359 1.446.359 2.201 0 3.86-3.141 7-7 7z" />
      <Path d="M22.443 5.904C21.146 2.373 17.754 0 14 0a1 1 0 0 0-1 1v9a1 1 0 0 0 1.447.895l7.504-3.752c.455-.228.667-.762.492-1.239zM15 8.382V2.073a7.033 7.033 0 0 1 5.206 3.706L15 8.382z" />
      <Circle cx={7} cy={15} r={1.5} />
      <Circle cx={15} cy={17} r={1.5} />
      <Circle cx={10} cy={19} r={1} />
      <Circle cx={8} cy={11} r={1} />
      <Circle cx={17} cy={5} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
