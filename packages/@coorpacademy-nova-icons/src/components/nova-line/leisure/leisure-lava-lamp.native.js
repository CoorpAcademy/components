import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24.001v24.002H.001z" />
    <G fill="currentColor">
      <Path d="M17 21c-.345 0-.5-.585-.5-1 0-.415.155-1 .5-1a.999.999 0 0 0 .976-1.114c-.004-.032.008-.063.002-.095l-3-14A1 1 0 0 0 14 3h-4c-.471 0-.878.33-.978.791l-3 14c-.096.452.188.943.568 1.116A.977.977 0 0 0 7 19c.345 0 .5.585.5 1 0 .415-.155 1-.5 1a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2zM10.809 5h2.383l2.572 12H8.237l2.572-12zm3.818 16H9.371a3.86 3.86 0 0 0 .13-1c0-.355-.044-.69-.127-1h5.257a3.86 3.86 0 0 0-.13 1 3.81 3.81 0 0 0 .126 1z" />
      <Circle cx={11} cy={12} r={1} />
      <Circle cx={12.625} cy={14.625} r={1.375} />
      <Circle cx={12.25} cy={8.75} r={0.75} />
    </G>
  </Svg>
);

export default SvgComponent;
