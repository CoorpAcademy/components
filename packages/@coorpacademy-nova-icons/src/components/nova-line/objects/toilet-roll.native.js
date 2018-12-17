import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24.001v24.001H0z" />
    <G fill="currentColor">
      <Path d="M20.287 14.127l1.42-1.421a.999.999 0 0 0 0-1.414l-1.42-1.42 1.545-2.318A.998.998 0 0 0 21 6h-7.189C13.16 4.257 10.844 3 8 3 4.636 3 2 4.757 2 7v10c0 2.243 2.636 4 6 4 2.844 0 5.16-1.257 5.811-3H21a1.002 1.002 0 0 0 .832-1.554l-1.545-2.319zM8 5c2.289 0 4 1.056 4 2s-1.711 2-4 2-4-1.056-4-2 1.711-2 4-2zm0 14c-2.289 0-4-1.056-4-2V9.999C5.055 10.623 6.447 11 8 11s2.945-.377 4-1.001V17c0 .944-1.711 2-4 2zm10.168-4.445L19.131 16H14V8h5.131l-.963 1.445a.998.998 0 0 0 .125 1.261L19.586 12l-1.293 1.293a1 1 0 0 0-.125 1.262z" />
      <Circle cx={8} cy={7} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
