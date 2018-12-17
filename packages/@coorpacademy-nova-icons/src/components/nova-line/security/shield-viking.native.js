import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.002.001h24v24.001h-24z" />
    <G fill="currentColor">
      <Path d="M12 1.001c-6.065 0-11 4.935-11 11s4.935 11 11 11 11-4.935 11-11-4.934-11-11-11zm0 20c-4.963 0-9-4.038-9-9s4.037-9 9-9 9 4.038 9 9-4.037 9-9 9z" />
      <Path d="M12 7.001c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm-3 5c0-1.302.839-2.401 2-2.815v5.631a2.997 2.997 0 0 1-2-2.816zm4 2.815v-5.63c1.162.414 2 1.513 2 2.815a2.992 2.992 0 0 1-2 2.815z" />
      <Circle cx={12} cy={5.001} r={1} />
      <Circle cx={7.051} cy={7.05} r={1} />
      <Circle cx={5} cy={11.999} r={1} />
      <Circle cx={7.05} cy={16.95} r={1} />
      <Circle cx={12} cy={19} r={0.999} />
      <Circle cx={16.95} cy={16.95} r={0.999} />
      <Path d="M19 11.001a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
      <Circle cx={16.909} cy={7.009} r={1} />
    </G>
  </Svg>
);

export default SvgComponent;
