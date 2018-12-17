import React from "react";
import Svg, { Path, G, Circle } from "react-native-svg";

const SvgComponent = props => (
  <Svg viewBox="0 0 24 24" {...props}>
    <Path fill="none" d="M.001.002h24v24h-24z" />
    <G fill="currentColor">
      <Path d="M22.885 20.535l-10-19c-.346-.658-1.424-.658-1.77 0l-10 19A1 1 0 0 0 2 22h20a1.002 1.002 0 0 0 .885-1.465zM3.656 20L12 4.146 20.344 20H3.656z" />
      <Circle cx={12} cy={9.5} r={1.5} />
      <Circle cx={12} cy={17.5} r={1.5} />
      <Circle cx={14.5} cy={13.5} r={1.5} />
      <Circle cx={9.5} cy={13.5} r={1.5} />
      <Circle cx={7.5} cy={17.5} r={1.5} />
      <Circle cx={16.5} cy={17.5} r={1.5} />
    </G>
  </Svg>
);

export default SvgComponent;
