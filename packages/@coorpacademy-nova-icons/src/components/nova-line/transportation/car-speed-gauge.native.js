import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm0 2c4.411 0 8 3.589 8 8a7.95 7.95 0 0 1-1.412 4.529 14.977 14.977 0 0 0-5.307-1.432l.708-4.956-1.979-.283-.744 5.202a15.07 15.07 0 0 0-5.854 1.469A7.95 7.95 0 0 1 4 12c0-4.411 3.589-8 8-8zM6.829 18.093c3.263-1.397 7.081-1.396 10.342.001a7.967 7.967 0 0 1-10.342-.001z" />
      <Circle cx={12} cy={6} r={1} />
      <Circle cx={16.242} cy={7.758} r={1} />
      <Circle cx={18} cy={12} r={1} />
      <Circle cx={7.758} cy={7.758} r={1} />
      <Circle cx={6} cy={12} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
