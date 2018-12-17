import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 16c2.507 0 4.554-.841 6.082-2.504 3.441-3.739 2.938-10.302 2.915-10.579l-1.993.166c.005.06.46 5.958-2.393 9.059C15.46 13.394 13.952 14 12 14c-1.95 0-3.457-.606-4.606-1.854-2.848-3.087-2.402-9.004-2.397-9.064l-1.994-.165c-.023.277-.526 6.84 2.915 10.579C7.446 15.159 9.493 16 12 16zM4.875 20l-.687 1.102L3.5 20H2.375l1.25 2-1.25 2H3.5l.688-1.1.687 1.1H6l-1.25-2L6 20z" />
      <Path d="M16.007 4.5V6h1V4.482L18 2h-1l-.5 1.25L16 2h-1l1 2.5z" />
      <Circle cx={12} cy={21} r={1} />
      <Circle cx={12} cy={12} r={1} />
      <Circle cx={12} cy={9} r={1} />
      <Circle cx={12} cy={6} r={1} />
      <Circle cx={12} cy={3} r={1} />
      <Circle cx={12} cy={18} r={1} />
      <Circle cx={15} cy={18} r={1} />
      <Circle cx={18} cy={18} r={1} />
      <Circle cx={21} cy={18} r={1} />
      <Circle cx={9} cy={18} r={1} />
      <Circle cx={6} cy={18} r={1} />
      <Circle cx={3} cy={18} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
