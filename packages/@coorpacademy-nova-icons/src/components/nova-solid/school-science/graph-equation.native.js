import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0 0h24v24H0z" />
    <G fill="currentColor">
      <Path d="M12 16.005c2.507 0 4.554-.843 6.082-2.504 3.441-3.739 2.938-10.302 2.915-10.579l-1.993.165c.005.059.46 5.957-2.393 9.059-1.15 1.25-2.658 1.858-4.61 1.858-1.95 0-3.457-.606-4.606-1.854-2.849-3.088-2.403-9.003-2.398-9.063l-1.994-.165c-.023.277-.526 6.84 2.915 10.579 1.528 1.661 3.575 2.504 6.082 2.504zM4.875 20.005l-.687 1.101-.688-1.101H2.375l1.25 2-1.25 2H3.5l.688-1.101.687 1.101H6l-1.25-2 1.25-2z" />
      <Path d="M16.007 4.505v1.5h1V4.486L18 2.005h-1l-.5 1.25-.5-1.25h-1l1 2.5z" />
      <Circle cx={12} cy={21.005} r={1} />
      <Circle cx={12} cy={12.005} r={1} />
      <Circle cx={12} cy={9.005} r={1} />
      <Circle cx={12} cy={6.005} r={1} />
      <Circle cx={12} cy={3.005} r={1} />
      <Circle cx={12} cy={18.005} r={1} />
      <Circle cx={15} cy={18.005} r={1} />
      <Circle cx={18} cy={18.005} r={1} />
      <Circle cx={21} cy={18.005} r={1} />
      <Circle cx={9} cy={18.005} r={1} />
      <Circle cx={6} cy={18.005} r={1} />
      <Circle cx={3} cy={18.005} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
