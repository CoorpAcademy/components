import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M-.001-.002H24v24.001H-.001z" />
    <G fill="currentColor">
      <Circle cx={16} cy={3} r={1} />
      <Circle cx={21} cy={5} r={1} />
      <Path d="M21.453 9.998C20.854 9.617 20.644 10 20 10a2.002 2.002 0 0 1-1.967-1.718 1 1 0 0 0-1.504-.717A2.954 2.954 0 0 1 15 8c-1.654 0-3-1.346-3-3 0-.507.138-1.005.41-1.48a.998.998 0 0 0-.016-1.02.989.989 0 0 0-.902-.476A9.987 9.987 0 0 0 2 12c0 5.515 4.486 10 10 10s10-4.485 10-10c0-.686.03-1.635-.547-2.002zM5 10a3.001 3.001 0 0 1 6 0 3.001 3.001 0 0 1-6 0zm6 9a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm3-4a1 1 0 1 1 0-2 1 1 0 1 1 0 2zm5 1a1 1 0 1 1-.002-1.998A1 1 0 0 1 19 16z" />
    </G>
  </Svg>
);

export default SvgComponent;
