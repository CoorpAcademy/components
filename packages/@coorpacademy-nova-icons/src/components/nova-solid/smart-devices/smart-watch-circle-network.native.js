import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M0-.003h24v24H0z" />
    <G fill="currentColor">
      <Circle cx={12} cy={9.001} r={1} />
      <Circle cx={9.5} cy={9.501} r={0.75} />
      <Circle cx={14.5} cy={9.501} r={0.75} />
      <Circle cx={14.5} cy={14.501} r={0.75} />
      <Circle cx={9.5} cy={14.501} r={0.75} />
      <Circle cx={15} cy={12.001} r={1} />
      <Circle cx={12} cy={12.001} r={1} />
      <Circle cx={9} cy={12.001} r={1} />
      <Circle cx={12} cy={15.001} r={1} />
      <Path d="M16.318 5.273L15 .001H9L7.682 5.273a7.987 7.987 0 0 0 0 13.455L9 24.001h6l1.318-5.272a7.987 7.987 0 0 0 0-13.456zM12 18.001a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
    </G>
  </Svg>
);

export default SvgComponent;
